it('reactive', function() {
    const raw = { count: 0 };
    const state = reactive(raw);

    expect(reactive.isReactive(state)).to.be.true;
    expect(reactive.isReactive(raw)).to.be.false;
    expect(reactive.toRaw(state)).to.equal(raw);
    expect(reactive.toRaw(raw)).to.equal(raw);
    expect(reactive(raw)).to.equal(state);
    expect(reactive(1)).to.equal(1);
});

it('effect', function() {
    const state = reactive({ count: 0 });
    let count = 0;

    const runner = reactive.effect(function() {
        count = state.count;
    });

    expect(count).to.equal(0);
    state.count = 1;
    expect(count).to.equal(1);
    state.count = 1;
    expect(count).to.equal(1);

    runner.stop();
    state.count = 2;
    expect(count).to.equal(1);
});

it('stopped effect stays stopped', function() {
    const state = reactive({ count: 0 });
    let count = 0;

    const runner = reactive.effect(function() {
        count = state.count;
    });

    runner.stop();
    state.count = 1;
    expect(count).to.equal(0);

    runner();
    expect(count).to.equal(0);
});

it('nested object', function() {
    const state = reactive({ user: { name: 'a', profile: { age: 1 } } });
    let name = '';
    let age = 0;

    reactive.effect(function() {
        name = state.user.name;
    });
    reactive.effect(function() {
        age = state.user.profile.age;
    });

    state.user.name = 'b';
    expect(name).to.equal('b');

    state.user.profile.age = 2;
    expect(age).to.equal(2);
    expect(state.user.profile.age).to.equal(2);

    state.user = { name: 'c', profile: { age: 3 } };
    expect(name).to.equal('c');
});

it('array', function() {
    const state = reactive({ list: [1, 2] });
    let len = 0;
    let first = 0;

    reactive.effect(function() {
        len = state.list.length;
    });
    reactive.effect(function() {
        first = state.list[0];
    });

    state.list.push(3);
    expect(len).to.equal(3);

    state.list[0] = 9;
    expect(first).to.equal(9);

    state.list.splice(0, 1);
    expect(len).to.equal(2);
    expect(first).to.equal(2);
});

it('delete property', function() {
    const state = reactive({ a: 1 });
    let val = 0;

    reactive.effect(function() {
        val = state.a;
    });

    delete state.a;
    expect(val).to.be.undefined;
});

it('scheduler', function() {
    const state = reactive({ count: 0 });
    let scheduled = 0;
    let ran = 0;

    const runner = reactive.effect(
        function() {
            ran++;
            return state.count;
        },
        {
            scheduler: function() {
                scheduled++;
            }
        }
    );

    expect(ran).to.equal(1);
    expect(scheduled).to.equal(0);

    state.count = 1;
    expect(scheduled).to.equal(1);
    expect(ran).to.equal(1);

    runner.stop();
    state.count = 2;
    expect(scheduled).to.equal(1);
});

it('lazy effect', function() {
    const state = reactive({ count: 0 });
    let ran = 0;

    const runner = reactive.effect(
        function() {
            ran++;
            return state.count;
        },
        { lazy: true }
    );

    expect(ran).to.equal(0);
    expect(runner()).to.equal(0);
    expect(ran).to.equal(1);
});

it('watch', function() {
    const state = reactive({ count: 0 });
    const values = [];

    const unwatch = reactive.watch(
        function() {
            return state.count;
        },
        function(val, oldVal) {
            values.push([val, oldVal]);
        }
    );

    state.count = 1;
    state.count = 2;

    expect(values).to.eql([
        [1, 0],
        [2, 1]
    ]);

    unwatch();
    state.count = 3;
    expect(values.length).to.equal(2);
});

it('watch immediate', function() {
    const state = reactive({ count: 5 });
    let val = null;
    let oldVal = 'unset';

    reactive.watch(
        function() {
            return state.count;
        },
        function(v, o) {
            val = v;
            oldVal = o;
        },
        { immediate: true }
    );

    expect(val).to.equal(5);
    expect(oldVal).to.be.undefined;
});

it('watch deep', function() {
    const state = reactive({ user: { name: 'a' }, list: [1] });
    let count = 0;

    reactive.watch(
        state,
        function() {
            count++;
        },
        { deep: true }
    );

    state.user.name = 'b';
    expect(count).to.equal(1);

    state.list.push(2);
    expect(count).to.equal(2);
});

it('computed', function() {
    const state = reactive({ count: 2 });
    let runs = 0;

    const double = reactive.computed(function() {
        runs++;
        return state.count * 2;
    });

    expect(runs).to.equal(0);
    expect(double.value).to.equal(4);
    expect(runs).to.equal(1);

    expect(double.value).to.equal(4);
    expect(runs).to.equal(1);

    state.count = 3;
    expect(runs).to.equal(1);
    expect(double.value).to.equal(6);
    expect(runs).to.equal(2);
});

it('computed in effect', function() {
    const state = reactive({ count: 2 });
    const double = reactive.computed(function() {
        return state.count * 2;
    });

    let seen = 0;
    reactive.effect(function() {
        seen = double.value;
    });

    expect(seen).to.equal(4);

    state.count = 5;
    expect(seen).to.equal(10);
});

it('iterate keys', function() {
    const state = reactive({ obj: { a: 1 } });
    let keys = [];

    reactive.effect(function() {
        keys = Object.keys(state.obj);
    });

    expect(keys).to.eql(['a']);

    state.obj.b = 2;
    expect(keys).to.eql(['a', 'b']);

    delete state.obj.a;
    expect(keys).to.eql(['b']);
});
