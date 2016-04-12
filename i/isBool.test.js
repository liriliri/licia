it('should return `true` for booleans', function ()
{
    expect(isBool(true)).to.be.true;
    expect(isBool(false)).to.be.true;
    expect(isBool(1)).to.be.false;
});