const cookie = util.cookie;

it('basic', function() {
    cookie.set('test', 'test');
    expect(cookie.get('test')).to.equal('test');
    rmCookie('test');
    expect(cookie.get('test')).to.be.undefined;
});

it('path', function() {
    cookie.set('test', 'test', { path: window.location.pathname });
    expect(cookie.get('test')).to.equal('test');
    cookie.remove('test');
    expect(cookie.get('test')).to.equal('test');
    rmCookie('test');
    expect(cookie.get('test')).to.be.undefined;
});
