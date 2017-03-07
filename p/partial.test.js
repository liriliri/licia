it('basic', function ()
{
    function subtract(a, b) { return b - a }

    expect(partial(subtract, 5)(20)).to.equal(15);
    expect(partial(subtract, 10)(20)).to.equal(10);
});