it('basic', function() {
    expect(lpad('a', 5)).to.equal('    a');
    expect(lpad('a', 5, '-')).to.equal('----a');
    expect(lpad('abc', 3, '-')).to.equal('abc');
    expect(lpad('abc', 5, 'ab')).to.equal('ababc');
    expect(lpad(5, 2, '0')).to.equal('05');
});
