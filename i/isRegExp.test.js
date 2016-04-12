it('should return `true` for regular expression', function ()
{
    expect(isRegExp(/a/)).to.be.true;
    expect(isRegExp(5)).to.be.false;
});