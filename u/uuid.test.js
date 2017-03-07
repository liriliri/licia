it('basic', function ()
{
    var regUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

    for (var i = 0; i < 1000; i++)
    {
        expect(regUuid.test(uuid())).to.be.true;
    }
});