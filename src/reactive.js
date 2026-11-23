/* Reactive state and side effects.
 *
 * ### reactive
 *
 * Create a deep reactive proxy of the given object, nested objects are
 * wrapped lazily when they are accessed.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |target|Object to wrap |
 * |return|Reactive proxy |
 *
 * ### isReactive
 *
 * Check whether the value is a reactive proxy.
 *
 * |Name  |Desc                  |
 * |------|----------------------|
 * |target|Value to check        |
 * |return|True if it is a proxy |
 *
 * ### toRaw
 *
 * Get the original object behind a reactive proxy.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |target|Reactive proxy |
 * |return|Original object|
 *
 * ### effect
 *
 * Run the given function and re-run it automatically when the reactive data
 * it reads changes.
 *
 * |Name    |Desc           |
 * |--------|---------------|
 * |fn      |Function to run|
 * |options |Effect options |
 * |return  |Effect runner  |
 *
 * ### watch
 *
 * Watch reactive data and call the callback when it changes.
 *
 * |Name   |Desc                      |
 * |--------|--------------------------|
 * |source |Getter or reactive object |
 * |cb     |Callback function         |
 * |options|Watch options             |
 * |return |Function to stop watching |
 *
 * ### computed
 *
 * Create a lazily evaluated derived value.
 *
 * |Name   |Desc            |
 * |-------|----------------|
 * |getter |Getter function |
 * |return |Computed value  |
 */

/* example
 * const state = reactive({ count: 0 });
 *
 * reactive.watch(
 *     function() {
 *         return state.count;
 *     },
 *     function(count) {
 *         console.log(count);
 *     }
 * );
 *
 * state.count++;
 */

/* module
 * env: node browser
 * since: 1.50.0
 */

/* typescript
 * export declare function reactive<T extends object>(target: T): T;
 * export declare namespace reactive {
 *     interface IEffectOptions {
 *         scheduler?: () => void;
 *         lazy?: boolean;
 *     }
 *     interface IEffectRunner {
 *         (): any;
 *         deps: any[];
 *         active: boolean;
 *         scheduler?: () => void;
 *         stop(): void;
 *     }
 *     type IWatchSource = (() => any) | object;
 *     interface IWatchOptions {
 *         immediate?: boolean;
 *         deep?: boolean;
 *     }
 *     function effect(fn: () => any, options?: IEffectOptions): IEffectRunner;
 *     function watch(
 *         source: IWatchSource,
 *         cb: (val: any, oldVal: any) => void,
 *         options?: IWatchOptions
 *     ): () => void;
 *     function computed<T>(getter: () => T): { value: T };
 *     function isReactive(target: any): boolean;
 *     function toRaw<T>(target: T): T;
 * }
 */

_('isFn isArr isPlainObj has');

const ITERATE = '@@iterate';

const regIntegerKey = /^(0|[1-9]\d*)$/;

const proxyMap = new WeakMap();
const rawMap = new WeakMap();
const depMap = new WeakMap();

let activeEffect = null;

function createDep() {
    const subs = [];

    return {
        depend: function() {
            if (!activeEffect) return;
            if (subs.indexOf(activeEffect) === -1) {
                subs.push(activeEffect);
                activeEffect.deps.push(this);
            }
        },
        notify: function() {
            const list = subs.slice();
            for (let i = 0; i < list.length; i++) {
                const sub = list[i];
                if (sub.scheduler) {
                    sub.scheduler();
                } else {
                    sub();
                }
            }
        },
        remove: function(sub) {
            const idx = subs.indexOf(sub);
            if (idx > -1) subs.splice(idx, 1);
        }
    };
}

function track(target, key) {
    if (!activeEffect) return;

    let deps = depMap.get(target);
    if (!deps) {
        deps = new Map();
        depMap.set(target, deps);
    }

    let dep = deps.get(key);
    if (!dep) {
        dep = createDep();
        deps.set(key, dep);
    }
    dep.depend();
}

function trigger(target, key) {
    const deps = depMap.get(target);
    if (!deps) return;

    const dep = deps.get(key);
    if (dep) dep.notify();
}

function reactive(target) {
    if (!isObservable(target)) return target;
    if (rawMap.has(target)) return target;

    const cached = proxyMap.get(target);
    if (cached) return cached;

    const proxy = new Proxy(target, handler);
    proxyMap.set(target, proxy);
    rawMap.set(proxy, target);

    return proxy;
}

// Only plain objects and arrays are made reactive, built-ins like Date, Map
// or class instances are left untouched, their internal slots would break
// when called with a proxy as `this`.
function isObservable(val) {
    return isArr(val) || isPlainObj(val);
}

function isIntegerKey(key) {
    return typeof key === 'string' && regIntegerKey.test(key);
}

function toRaw(target) {
    const raw = rawMap.get(target);
    return raw ? raw : target;
}

function isReactive(target) {
    return rawMap.has(target);
}

const handler = {
    get: function(t, key, receiver) {
        const res = Reflect.get(t, key, receiver);
        if (typeof key === 'symbol') return res;

        track(t, key);

        return isObservable(res) ? reactive(res) : res;
    },
    set: function(t, key, value) {
        const oldValue = t[key];
        const hadKey = has(t, key);
        const raw = toRaw(value);
        const isIndex = isArr(t) && isIntegerKey(key);

        Reflect.set(t, key, raw);

        if (!hadKey) {
            trigger(t, key);
            trigger(t, ITERATE);
            // Assigning a new index extends the array silently, the length
            // has to be triggered as well.
            if (isIndex) trigger(t, 'length');
        } else if (raw !== oldValue) {
            trigger(t, key);
        }

        return true;
    },
    deleteProperty: function(t, key) {
        const hadKey = has(t, key);
        const result = Reflect.deleteProperty(t, key);
        if (hadKey) {
            trigger(t, key);
            trigger(t, ITERATE);
        }
        return result;
    },
    has: function(t, key) {
        if (typeof key === 'symbol') return Reflect.has(t, key);

        // Only own properties are visible, inherited ones are not tracked.
        return has(t, key);
    },
    ownKeys: function(t) {
        track(t, ITERATE);
        return Reflect.ownKeys(t);
    }
};

function effect(fn, options) {
    options = options || {};

    const runner = function() {
        if (!runner.active) return;

        cleanup(runner);

        const prevEffect = activeEffect;
        activeEffect = runner;

        try {
            return fn();
        } finally {
            activeEffect = prevEffect;
        }
    };

    runner.deps = [];
    runner.active = true;
    runner.scheduler = options.scheduler;
    runner.stop = function() {
        runner.active = false;
        cleanup(runner);
    };

    if (!options.lazy) runner();

    return runner;
}

function cleanup(runner) {
    const deps = runner.deps;
    for (let i = 0; i < deps.length; i++) {
        deps[i].remove(runner);
    }
    runner.deps = [];
}

function watch(source, cb, options) {
    options = options || {};

    const getter = isFn(source)
        ? source
        : function() {
              return traverse(source);
          };

    let oldValue;

    const runner = effect(getter, {
        lazy: true,
        scheduler: function() {
            const newValue = runner();
            if (newValue !== oldValue || options.deep) {
                cb(newValue, oldValue);
                oldValue = newValue;
            }
        }
    });

    oldValue = runner();

    if (options.immediate) cb(oldValue, undefined);

    return function() {
        runner.stop();
    };
}

function traverse(val, seen) {
    seen = seen || new Set();

    if (!isObservable(val) || seen.has(val)) return val;
    seen.add(val);

    if (isArr(val)) {
        for (let i = 0; i < val.length; i++) {
            traverse(val[i], seen);
        }
    } else {
        const keys = Object.keys(val);
        for (let i = 0; i < keys.length; i++) {
            traverse(val[keys[i]], seen);
        }
    }

    return val;
}

function computed(getter) {
    let dirty = true;
    let value;

    // The computed value has its own dep, so that effects reading it are
    // notified when the source data changes.
    const dep = createDep();

    const runner = effect(getter, {
        lazy: true,
        scheduler: function() {
            if (dirty) return;
            dirty = true;
            dep.notify();
        }
    });

    return {
        get value() {
            if (dirty) {
                dirty = false;
                value = runner();
            }
            dep.depend();
            return value;
        }
    };
}

exports = reactive;
exports.effect = effect;
exports.watch = watch;
exports.computed = computed;
exports.isReactive = isReactive;
exports.toRaw = toRaw;
