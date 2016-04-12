it('should return `true` for functions', function ()
{
    expect(isFn(function () {})).to.be.true;
    expect(isFn(5)).to.be.false;
});