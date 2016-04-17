it('return a globally-unique id', function ()
{
    var a = uniqueId(),
        b = uniqueId();

    expect(a).to.not.equal(b);
});