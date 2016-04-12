it('gets the last element of an array', function ()
{
    expect(last([1, 2])).to.equal(2);
    expect(last([])).to.be.undefined;
});