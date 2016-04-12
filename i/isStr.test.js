it('should return `true` for strings', function ()
{
    expect(isStr('eustia')).to.be.true;
    expect(isStr(5)).to.be.false;
});