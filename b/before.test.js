it('restrict function invoke times', function ()
{
    var count = 0;
    var fn = before(5, function ()
    {
        count++;
    });
    fn();
    expect(count).to.equal(1);
    fn();
    expect(count).to.equal(2);
    fn();
    fn();
    fn();
    fn();
    expect(count).to.equal(4);
});