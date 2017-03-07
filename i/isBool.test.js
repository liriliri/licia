it('true', function ()
{
    expect(isBool(true)).to.be.true;
    expect(isBool(false)).to.be.true;
});

it('false', function ()
{
    expect(isBool(1)).to.be.false;
    expect(isBool(null)).to.be.false;
});