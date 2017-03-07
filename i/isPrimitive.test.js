it('true', function ()
{
    expect(isPrimitive(5)).to.be.true;
    expect(isPrimitive('abc')).to.be.true;
    expect(isPrimitive(null)).to.be.true;
    expect(isPrimitive(false)).to.be.true;
    expect(isPrimitive(true)).to.be.true;
});

it('false', function ()
{
    expect(isPrimitive([])).to.be.false;
    expect(isPrimitive(function () {})).to.be.false;
    expect(isPrimitive({})).to.be.false;
});