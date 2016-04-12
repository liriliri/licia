it('should return `true` for arrays', function ()
{
    expect(isArr([])).to.be.true;
    expect(isArr({})).to.be.false;
});