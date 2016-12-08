it('convert object into a list of pairs', function ()
{
    expect(pairs({a: 1, b: 2})).to.eql([['a', 1], ['b', 2]]);
});