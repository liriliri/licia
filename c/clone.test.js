it('clone object', function ()
{
    var a = {name: 'eris'},
        b = clone(a);

    expect(a).to.eql(b);
    expect(a).to.not.equal(b);
});