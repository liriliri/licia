it('encode byte array', function ()
{
    expect(base64.encode([255, 255, 255])).to.equal('////');
    expect(base64.encode([255, 255, 255, 255])).to.equal('/////w==');
    expect(base64.encode([255, 255, 255, 255, 255])).to.equal('//////8=');
    expect(base64.encode([168, 174, 155, 255])).to.equal('qK6b/w==');
});

it('decode base64 string', function ()
{
    expect(base64.decode('////')).to.eql([255, 255, 255]);
    expect(base64.decode('/////w==')).to.eql([255, 255, 255, 255]);
    expect(base64.decode('//////8=')).to.eql([255, 255, 255, 255, 255]);
    expect(base64.decode('qK6b/w==')).to.eql([168, 174, 155, 255]);
});