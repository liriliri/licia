it('basic', function () 
{
    expect(isOdd(0)).to.be.false;
    expect(isOdd(1)).to.be.true;
    expect(isOdd(2)).to.be.false;
});