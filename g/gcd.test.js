it('basic', function () 
{
    expect(gcd(121, 44)).to.be.equal(11);
    expect(gcd(44, 121)).to.be.equal(11);
    expect(gcd(3, 2)).to.be.equal(1);
});