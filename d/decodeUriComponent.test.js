it('basic', function () 
{
    expect(decodeUriComponent('test')).to.equal('test');
    expect(decodeUriComponent('%25')).to.equal('%');
    expect(decodeUriComponent('%%25%')).to.equal('%%%');
    expect(decodeUriComponent('%%C2%B5%')).to.equal('%µ%');
});