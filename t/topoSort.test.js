it('basic', function() {
    expect(topoSort([[1, 2], [1, 3], [3, 2]])).to.eql([1, 3, 2]);
    expect(topoSort([[1, 2]])).to.eql([1, 2]);
});
