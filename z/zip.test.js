it('basic', function ()
{
    expect(zip(['a', 'b'], [1, 2], [true, false])).to.eql([['a', 1, true], ['b', 2, false]]);
});