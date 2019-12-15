it('true', () => {
    test([
        [[1, 2, 3], true],
        ['abc', true],
        [{ length: 2, 0: '0', 1: '1' }, true]
    ]);
});

it('false', () => {
    test([[function() {}, false], [{}, false]]);
});
