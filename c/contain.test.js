it('check if value is present in the list', function ()
{
    expect(contain([1, 2, 3], 1)).to.be.true;
    expect(contain([1, 2, 3], 4)).to.be.false;
});