it('get the last element of an array', function ()
{
    expect(last([1, 2])).to.equal(2);
});

it('return `undefined` if array is empty',function ()
{
    expect(last([])).to.be.undefined;
});