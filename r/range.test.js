it('basic', function ()
{
    expect(range(5)).to.eql([0, 1, 2, 3, 4]);
    expect(range(0, 5, 2)).to.eql([0, 2, 4]);
});