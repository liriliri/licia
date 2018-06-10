it('basic', function() {
    expect(toNum({})).to.be.NaN;
    expect(toNum([])).to.equal(0);
    expect(toNum(null)).to.equal(0);
    expect(toNum(1)).to.equal(1);
    expect(toNum('5')).to.equal(5);
});
