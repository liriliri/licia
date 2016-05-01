it('negate function result', function ()
{
    function even(n) { return n % 2 === 0 }
    var odd = negate(even);

    expect(odd(5)).to.be.true;
});