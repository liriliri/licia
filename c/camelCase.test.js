it('convert string to camel case', function ()
{
    expect(camelCase('foo')).to.equal('foo');
    expect(camelCase('foo-bar')).to.equal('fooBar');
    expect(camelCase('foo--bar')).to.equal('fooBar');
    expect(camelCase('__foo__bar__')).to.equal('fooBar');
    expect(camelCase('foo bar')).to.equal('fooBar');
    expect(camelCase('foo.bar')).to.equal('fooBar');
});