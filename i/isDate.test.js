it('should return `true` for Date', function ()
{
    expect(isDate(new Date)).to.be.true;
    expect(isDate(5)).to.be.false;
});