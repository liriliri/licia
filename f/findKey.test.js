it('find target key of given objects', function ()
{
    expect(findKey({a: 1, b: 2}, function (val)
    {
        return val === 1;
    })).to.equal('a');
});