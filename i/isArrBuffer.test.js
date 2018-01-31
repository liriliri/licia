it('basic', function () 
{
    expect(isArrBuffer(new ArrayBuffer(8))).to.be.true;
    expect(isArrBuffer([])).to.be.false;
    expect(isArrBuffer(new Int16Array)).to.be.false;
    expect(isArrBuffer(null)).to.be.false;
});