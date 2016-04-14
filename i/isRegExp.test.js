it('return `true` for regular expressions', function ()
{
    expect(isRegExp(/a/)).to.be.true;
    expect(isRegExp(new RegExp(''))).to.be.true;
});

it('return `false` for non regular expressions', function ()
{
    expect(isRegExp(5)).to.be.false;
});