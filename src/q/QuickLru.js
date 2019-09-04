/* LRU implementation without linked list.
 *
 * Inspired by the [hashlru algorithm](https://github.com/dominictarr/hashlru#algorithm).
 *
 * The api is the same as Lru module.
 */

/* example
 * const cache = new QuickLru(50);
 * cache.set('test', 'licia');
 * cache.get('test'); // -> 'licia'
 */

/* module
 * env: all
 * test: all
 * since: 1.4.5
 */

/* typescript
 * export declare class QuickLru {
 *     constructor(max: number);
 *     has(key: string): boolean;
 *     remove(key: string): void;
 *     get(key: string): any;
 *     set(key: string, val: any): void;
 *     clear(): void;
 * }
 */

_('isUndef');

exports = class QuickLru {
    constructor(max) {
        this._max = max;
        this._cache = {};
        this._oldCache = {};
        this._size = 0;
    }
    has(key) {
        return !isUndef(this._cache[key]) || !isUndef(this._oldCache[key]);
    }
    remove(key) {
        if (!isUndef(this._cache[key])) this._cache[key] = undefined;
        if (!isUndef(this._oldCache[key])) this._oldCache[key] = undefined;
    }
    get(key) {
        if (!isUndef(this._cache[key])) {
            return this._cache[key];
        }
        const val = this._oldCache[key];
        if (!isUndef(val)) {
            this._update(key, val);
            return val;
        }
    }
    set(key, val) {
        if (!isUndef(this._cache[key])) {
            this._cache[key] = val;
        } else {
            this._update(key, val);
        }
    }
    clear() {
        this._cache = {};
        this._oldCache = {};
    }
    _update(key, val) {
        this._cache[key] = val;
        this._size++;

        if (this._size > this._max) {
            this._size = 0;
            this._oldCache = this._cache;
            this._cache = {};
        }
    }
};
