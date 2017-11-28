it('true', function () 
{
    /* eslint-disable no-octal */
    expect(isNumeric(1)).to.be.true;
    expect(isNumeric('1')).to.be.true;
    expect(isNumeric(Number.MAX_VALUE)).to.be.true;
    expect(isNumeric(0144)).to.be.true;
    expect(isNumeric(0xFF)).to.be.true;
});

it('false', function () 
{
    expect(isNumeric('')).to.be.false;
    expect(isNumeric('1.1.1')).to.be.false;
    expect(isNumeric(NaN)).to.be.false;
});