it('should return `true` for integers', function ()
{
    expect(isInt(5)).to.be.true;
    expect(isInt(5.1)).to.be.false;
    expect(isInt({})).to.be.false;
});