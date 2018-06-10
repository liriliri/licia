it('basic', function() {
    expect(isNative(function() {})).to.be.false;
    expect(isNative(isNative)).to.be.false;
    expect(isNative(Math.min)).to.be.true;
    expect(isNative(Date.now)).to.be.true;
});
