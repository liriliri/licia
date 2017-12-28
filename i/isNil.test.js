it('basic', function () 
{
    expect(isNil(null)).to.be.true;
    expect(isNil(void 0)).to.be.true;
    expect(isNil(undefined)).to.be.true;
    expect(isNil(false)).to.be.false;
    expect(isNil(0)).to.be.false;
    expect(isNil([])).to.be.false;
});