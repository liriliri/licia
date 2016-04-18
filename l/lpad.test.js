it('pad string on the left side', function ()
{
    expect(lpad('a', 5)).to.equal('    a');
    expect(lpad('a', 5, '-')).to.equal('----a');
    expect(lpad('abc', 3, '-')).to.equal('abc');
    expect(lpad('abc', 5, 'ab')).to.equal('ababc');
});