it('return `true` for booleans', function ()
{
    expect(isBool(true)).to.be.true;
    expect(isBool(false)).to.be.true;
});

it('return `false` for non-booleans', function ()
{
    expect(isBool(1)).to.be.false;
    expect(isBool(null)).to.be.false;
});