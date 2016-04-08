describe('cookie', function ()
{
    var cookie = _.cookie;

    it('set and get', function ()
    {
        cookie.set('name', 'eustia');
        expect(cookie.get('name')).to.equal('eustia');
    });

    it('remove', function ()
    {
        cookie.remove('name');
        expect(cookie.get('name')).to.equal(undefined);
    });
});