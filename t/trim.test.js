it('basic', function ()
{
    expect(trim(' abc  ')).to.equal('abc');
    expect(trim('_abc_', '_')).to.equal('abc');
    expect(trim('_abc_', ['a', 'c', '_'])).to.equal('b');
    expect(trim('_abc_', 'ac_')).to.equal('b');
});