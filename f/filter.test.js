it('filter elements not passing the given test', function ()
{
    expect(filter([1, 2, 3, 4, 5], function (val)
    {
        return val % 2 === 0;
    })).to.deep.equal([2, 4]);
});