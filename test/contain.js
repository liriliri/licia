it('basic', () => {
    tests([
        [[1, 2, 3], 1, true],
        [[1, 2, 3], 4, false]
    ]);
});

it('object', () => {
    tests([
        [{ a: 1, b: 2 }, 1, true],
        [{ b: 2 }, 1, false]
    ]);
});

it('string', () => {
    tests([
        ['abc', 'a', true],
        ['abc', 'd', false]
    ]);
});
