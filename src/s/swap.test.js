it('basic', function() {
    var arr = [1, 2];
    expect(swap(arr, 0, 1)).to.eql([2, 1]);
    expect(arr).to.eql([2, 1]);
});
