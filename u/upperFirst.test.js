it('uppercase the first character of string', function ()
{
    expect(upperFirst('red')).to.equal('Red');
    expect(upperFirst('rED')).to.equal('RED');
});