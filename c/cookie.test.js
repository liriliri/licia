it('set, get cookie', function ()
{
    cookie.set('name', 'eustia');
    expect(cookie.get('name')).to.equal('eustia');
});

it('remove cookie', function ()
{
    cookie.remove('name');
    expect(cookie.get('name')).to.be.undefined;
});