it('basic', () => {
    test([[[1, 2, 3], 1, true], [[1, 2, 3], 4, false]]);
});

it('object', () => {
    test([[{ a: 1, b: 2 }, 1, true], [{ b: 2 }, 1, false]]);
});

it('string', () => {
    test([['abc', 'a', true], ['abc', 'd', false]]);
});
