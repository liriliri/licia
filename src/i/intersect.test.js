it('basic', function() {
    expect(intersect([2, 4, 3, 1, 5, 3], [1, 2, 3], [3, 1])).to.eql([3, 1]);
});
