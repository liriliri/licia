it('return `true` for strings end with target string', function ()
{
    expect(endWith('ab', 'b')).to.be.true;
    expect(endWith('ab', 'a')).to.be.false;
});