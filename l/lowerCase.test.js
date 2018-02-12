it('basic', function () 
{
    expect(lowerCase('TEST')).to.equal('test');
    expect(lowerCase(null)).to.equal('');
});