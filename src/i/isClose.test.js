it('basic', () => {
    test([[1, 1.0000000001, true], [1, 2, false]]);
});

it('relative tolerance', () => test([[1, 1.2, 0.3, true]]));

it('absolute tolerance', () => test([[1, 1.2, 0.1, 0.3, true]]));
