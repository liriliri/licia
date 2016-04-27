it('split different string case to an array', function ()
{
    expect(splitCase('foo').length).to.equal(1);
    expect(splitCase('foo-bar').length).to.equal(2);
    expect(splitCase('foo--bar').length).to.equal(2);
    expect(splitCase('__foo__bar__').length).to.equal(2);
    expect(splitCase('foo bar').length).to.equal(2);
    expect(splitCase('foo.bar').length).to.equal(2);
    expect(splitCase('fooBar').length).to.equal(2);
});