it('return `true` for strings', function ()
{
    expect(isStr('eustia')).to.be.true;
});

it('return `false` for non-strings', function ()
{
    expect(isStr(5)).to.be.false;
});