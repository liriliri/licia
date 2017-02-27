it('basic', function ()
{
    expect(min(1, 2, 8, 4)).to.equal(1);
    expect(min(2, 1)).to.equal(1);
});