it('basic', function() {
    expect(isSorted([1, 2, 3])).to.be.true;
    expect(isSorted([3, 2, 1])).to.be.false;
    expect(
        isSorted([3, 2, 1], function(a, b) {
            return b - a;
        })
    ).to.be.true;
});
