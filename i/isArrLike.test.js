it('true', function ()
{
    expect(isArrLike([1, 2, 3])).to.be.true;
    expect(isArrLike('abc')).to.be.true;
    expect(isArrLike({length: 2, 0: '0', 1: '1'})).to.be.true;
});

it('false', function () 
{
    expect(isArrLike(function() {})).to.be.false;
    expect(isArrLike({})).to.be.false;
});