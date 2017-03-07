it('set, get', function ()
{
    cookie.set('name', 'eustia');
    expect(cookie.get('name')).to.equal('eustia');
});

it('remove', function ()
{
    cookie.remove('name');
    expect(cookie.get('name')).to.be.undefined;
});