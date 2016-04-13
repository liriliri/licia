it('return `true` for undefined', function ()
{
    expect(isUndef(void 0)).to.be.true;
});

it('return `false` for non-undefined', function ()
{
    var b = 1;

    expect(isUndef(b)).to.be.false;
    expect(isUndef(null)).to.be.false;
});