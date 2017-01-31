it('return a globally-unique id', function ()
{
    var a = uniqId(),
        b = uniqId();

    expect(a).to.not.equal(b);
});