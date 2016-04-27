it('convert string to space case', function ()
{
    expect(spaceCase('foo')).to.equal('foo');
    expect(spaceCase('foo--bar')).to.equal('foo bar');
    expect(spaceCase('__foo__bar__')).to.equal('foo bar');
    expect(spaceCase('fooBar')).to.equal('foo bar');
});