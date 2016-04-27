it('convert string to snake case', function ()
{
    expect(snakeCase('foo')).to.equal('foo');
    expect(snakeCase('foo_bar')).to.equal('foo_bar');
    expect(snakeCase('foo--bar')).to.equal('foo_bar');
    expect(snakeCase('__foo__bar__')).to.equal('foo_bar');
    expect(snakeCase('foo bar')).to.equal('foo_bar');
    expect(snakeCase('foo.bar')).to.equal('foo_bar');
    expect(snakeCase('fooBar')).to.equal('foo_bar');
});