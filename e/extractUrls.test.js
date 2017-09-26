it('basic', function () 
{
    expect(extractUrls('[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)')).to.eql(['http://eustia.liriliri.io']);
    expect(extractUrls('No url')).to.eql([]);
    expect(extractUrls('http://')).to.eql([]);
});