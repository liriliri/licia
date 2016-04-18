it('pad string on the right side', function ()
{
    expect(rpad('a', 5)).to.equal('a    ');
    expect(rpad('a', 5, '-')).to.equal('a----');
    expect(rpad('abc', 3, '-')).to.equal('abc');
    expect(rpad('abc', 5, 'ab')).to.equal('abcab');
});