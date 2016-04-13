it('return `true` for functions', function ()
{
    expect(isFn(function () {})).to.be.true;
});

it('return `false` for non-functions', function ()
{
    expect(isFn(5)).to.be.false;
    expect(isFn({})).to.be.false;
});