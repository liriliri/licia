it('basic', function() {
    test([['a', 'b', 'c', 'a b c'], ['a', false, 'b', 0, 1, 'c', 'a b 1 c']]);
});

it('object', function() {
    test([['a', { b: false, c: true }, 'a c']]);
});

it('array', function() {
    test([
        ['a', ['b', 'c'], 'a b c'],
        ['a', ['b', 'c', { d: true, e: false }], 'a b c d']
    ]);
});
