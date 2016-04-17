it('return repeated string', function ()
{
    expect(repeat('*', 3)).to.equal('***');
    expect(repeat('ab', 2)).to.equal('abab');
    expect(repeat('a', 0)).to.equal('');
});