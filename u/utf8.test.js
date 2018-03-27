it('encode', function () 
{
    expect(utf8.encode('\u0001')).to.equal('\x01');
    expect(utf8.encode('\u05CA')).to.equal('\xD7\x8A');
    expect(utf8.encode('\u0800')).to.equal('\xE0\xA0\x80');
    expect(utf8.encode('\uD800\uDC00')).to.equal('\xF0\x90\x80\x80');
});

it('decode', function () 
{
    expect(utf8.decode('\x01')).to.equal('\u0001');
    expect(utf8.decode('\xD7\x8A')).to.equal('\u05CA');
    expect(utf8.decode('\xE0\xA0\x80')).to.equal('\u0800');
    expect(utf8.decode('\xF0\x90\x80\x80')).to.equal('\uD800\uDC00');

    // Invalid continuation byte
    expect(function () 
    {
        utf8.decode('\xED\xA0\x80\xED\xA0\x80'); 
    }).to.throw();

    // Invalid byte index
    expect(function () 
    {
        utf8.decode('\xE0\xA4');
    }).to.throw();

    // Invalid UTF-8 detected
    expect(function ()
    {
        utf8.decode('\xFF\x01');
    }).to.throw();
});