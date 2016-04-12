it('should return `true` for undefined', function ()
{
    var a, b = 1;

    expect(isUndef(a)).to.be.true;
    expect(isUndef(b)).to.be.false;
    expect(isUndef(null)).to.be.false;
});