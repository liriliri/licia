it('true', function ()
{
    expect(isErr(new Error())).to.be.true;
});

it('false', function ()
{
    expect(isErr(5)).to.be.false;
});