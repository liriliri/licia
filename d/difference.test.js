it('diff array', function ()
{
    expect(difference(['a', 'd'], ['a', 'b', 'c'])).to.deep.equal(['d']);
});