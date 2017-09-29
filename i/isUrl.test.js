it('basic', function () 
{
    expect(isUrl('http://www.example.com?foo=bar&param=test')).to.be.true;
    expect(isUrl('test')).to.be.false;
    expect(isUrl('ftp://www.example.com')).to.be.true;
    expect(isUrl('http://127.0.0.1')).to.be.true;
});