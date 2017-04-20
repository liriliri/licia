it('basic', function ()
{
    expect(rpad('a', 5)).to.equal('a    ');
    expect(rpad('a', 5, '-')).to.equal('a----');
    expect(rpad('abc', 3, '-')).to.equal('abc');
    expect(rpad('abc', 5, 'ab')).to.equal('abcab');
    expect(rpad(5, 2, '0')).to.equal('50');
});