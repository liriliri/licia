it('basic', function() {
    expect(getUrlParam('test', 'http://example.com/?test=true')).to.equal(
        'true'
    );
    expect(getUrlParam('test', 'http://example.com/?test=%3D%3D')).to.equal(
        '=='
    );
});
