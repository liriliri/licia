it('check if value is array like', function ()
{
    expect(isArrLike([1, 2, 3])).to.be.true;
    expect(isArrLike('abc')).to.be.true;
    expect(isArrLike({length: 2, 0: '0', 1: '1'})).to.be.true;
});
