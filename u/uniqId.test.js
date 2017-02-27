it('basic', function ()
{
    var a = uniqId(),
        b = uniqId();

    expect(a).to.not.equal(b);
});

it('prefix', function () 
{
    var a = uniqId('eustia');

    expect(a.indexOf('eustia')).to.equal(0);
});