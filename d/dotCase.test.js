it('basic', function() {
    expect(dotCase('foo')).to.equal('foo');
    expect(dotCase('foo--bar')).to.equal('foo.bar');
    expect(dotCase('__foo__bar__')).to.equal('foo.bar');
    expect(dotCase('foo bar')).to.equal('foo.bar');
    expect(dotCase('fooBar')).to.equal('foo.bar');
});
