it('return `true` for errors', function ()
{
    expect(isErr(new Error())).to.be.true;
});

it('return `false` for non-errors', function ()
{
    expect(isErr(5)).to.be.false;
});