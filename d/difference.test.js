it('basic', function ()
{
    expect(difference(['a', 'd'], ['a', 'b', 'c'])).to.deep.equal(['d']);
});