it('basic', function () 
{
    expect(extractUrls('[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)')).to.eql(['http://eustia.liriliri.io']);
    expect(extractUrls('No url')).to.eql([]);
    expect(extractUrls('http://')).to.eql([]);
    expect(extractUrls('http://www.google.com/search?q=test, ftp://127.0.0.1/')).to.eql([
        'http://www.google.com/search?q=test',
        'ftp://127.0.0.1/'
    ]);
});