it('restrict function invoke times to one', function ()
{
    var count = 0;
    var fn = once(function () { count++ });
    fn();
    fn();
    fn();
    expect(count).to.equal(1);
});