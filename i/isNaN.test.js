it('true', function ()
{
    expect(isNaN(NaN)).to.be.true;
});

it('false', function ()
{
    expect(isNaN(undefined)).to.be.false;
    expect(isNaN(null)).to.be.false;
});