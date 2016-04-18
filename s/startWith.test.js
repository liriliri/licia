it('return `true` for strings start with target string', function ()
{
    expect(startWith('ab', 'a')).to.be.true;
    expect(startWith('ab', 'b')).to.be.false;
});