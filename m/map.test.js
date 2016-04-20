it('iterate over collection to create a new array', function ()
{
    expect(map([2, 4], function (n) { return n * n})).to.deep.equal([4, 16]);
});