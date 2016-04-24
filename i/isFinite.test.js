it('return `true` for finite primitives', function ()
{
    expect(isFinite(3)).to.be.true;
});

it('return `false` for non finite primitives', function ()
{
    expect(isFinite(Infinity)).to.be.false;
});