it('trim beginning and end of string', function ()
{
    expect(trim(' abc  ')).to.equal('abc');
    expect(trim('_abc_', '_')).to.equal('abc');
    expect(trim('_abc_', ['a', 'c', '_'])).to.equal('b');
});