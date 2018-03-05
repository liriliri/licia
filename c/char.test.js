it('basic', function () 
{
    expect(char(65)).to.equal('A');
    expect(char(97)).to.equal('a');
    expect(char(8364)).to.equal('€');
});