it('trim beginning of string', function ()
{
    expect(ltrim(' abc  ')).to.equal('abc  ');
    expect(ltrim('_abc_', '_')).to.equal('abc_');
    expect(ltrim('_abc_', ['a', '_'])).to.equal('bc_');
});