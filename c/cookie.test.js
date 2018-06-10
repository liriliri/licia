it('set, get', function() {
    cookie.set('name', 'eustia');
    expect(cookie.get('name')).to.equal('eustia');
    cookie.set('name2', 'eruda');
    expect(cookie.get()).to.eql({
        name: 'eustia',
        name2: 'eruda'
    });
});

it('remove', function() {
    cookie.remove('name');
    expect(cookie.get('name')).to.be.undefined;
});
