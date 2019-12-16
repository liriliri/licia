it('basic', () => {
    tests([
        [1, 1.0000000001, true],
        [1, 2, false]
    ]);
});

it('relative tolerance', () => tests([[1, 1.2, 0.3, true]]));

it('absolute tolerance', () => tests([[1, 1.2, 0.1, 0.3, true]]));
