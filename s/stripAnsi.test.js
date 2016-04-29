it('strip ansi codes', function ()
{
    expect(stripAnsi('\u001b[4mcake\u001b[0m')).to.equal('cake');
});