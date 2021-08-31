it('true', function() {
    let obj = {};
    obj.obj = obj;
    test([obj, true]);

    obj = { foo: { bar: { baz: { qux: {} } } } };
    obj.foo.bar.baz.qux = obj.foo;
    test([obj, true]);
});

it('false', function() {
    tests([
        [{}, false],
        ['', false],
        [5, false]
    ]);

    const obj = {};
    const obj2 = {};
    obj.a = obj2;
    obj.b = obj2;
    test([obj, false]);
});
