it('return `true` for NaNs', function ()
{
    expect(isNaN(NaN)).to.be.true;
});

it('return `false` for non-NaNs', function ()
{
    expect(isNaN(undefined)).to.be.false;
    expect(isNaN(null)).to.be.false;
});