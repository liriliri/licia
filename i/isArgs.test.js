it('true', function ()
{
    expect(isArgs(arguments)).to.be.true;
});

it('false', function ()
{
    expect(isArgs([])).to.be.false;
});