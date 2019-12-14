it('basic', () => {
    test([
        [[1, 2, 3], 2, 1],
        [[1, 2], 3, -1],
        [
            [
                {
                    key: 1
                },
                {
                    key: 2
                }
            ],
            { key: 1 },
            (a, b) => {
                if (a.key === b.key) return 0;
                return a.key < b.key ? -1 : 1;
            },
            0
        ]
    ]);
});

it('big array', () => {
    const arr = util.range(10000);
    test([[arr, 500, 500]]);
});
