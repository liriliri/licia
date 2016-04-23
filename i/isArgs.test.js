it('return `true` for function arguments', function ()
{
    expect(isArgs(arguments)).to.be.true;
});

it('return `false` for non function arguments', function ()
{
    expect(isArgs([])).to.be.false;
});