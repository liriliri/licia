const range = util.range;

it('basic', () => {
    expect(binarySearch([1, 2, 3], 2)).to.equal(1);
    expect(binarySearch([1, 2], 3)).to.equal(-1);
    expect(
        binarySearch(
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
            }
        )
    ).to.equal(0);
});

it('big array', () => {
    const arr = range(10000);
    expect(binarySearch(arr, 500)).to.equal(500);
});
