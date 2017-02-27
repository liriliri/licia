it('true', function ()
{
    expect(isEqual([1, 2, 3], [1, 2, 3])).to.be.true;
    expect(isEqual({length: 1}, {length: 1})).to.be.true;
    expect(isEqual(2, 2)).to.be.true;
    expect(isEqual('test', 'test')).to.be.true;
});

it('false', function () 
{
    expect(isEqual([], [1])).to.be.false;
});