it('basic', function() {
    expect(upperCase('test')).to.equal('TEST');
    expect(upperCase(null)).to.equal('');
});
