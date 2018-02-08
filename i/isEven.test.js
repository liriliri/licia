it('basic', function () 
{
    expect(isEven(0)).to.be.true;
    expect(isEven(1)).to.be.false;
    expect(isEven(2)).to.be.true;
});