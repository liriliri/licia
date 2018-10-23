it('basic', function() {
    expect(pad('a', 5)).to.equal('  a  ');
    expect(pad('a', 5, '-')).to.equal('--a--');
    expect(pad('abc', 3, '-')).to.equal('abc');
    expect(pad('abc', 5, 'ab')).to.equal('babca');
    expect(pad('ab', 5, 'ab')).to.equal('babab');
    expect(pad(5, 3, '0')).to.equal('050');
});
