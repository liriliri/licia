it('basic', function () 
{
    expect(isBlob(new Blob([]))).to.be.true;
    expect(isBlob([])).to.be.false;
});