it('basic', function() {
    expect(quickSort([3, 2, 1])).to.eql([1, 2, 3]);
    expect(
        quickSort([1, 2, 3], function(a, b) {
            return b - a;
        })
    ).to.eql([3, 2, 1]);
});
