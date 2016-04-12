it('return `true` for arrays', function ()
{
    expect(isArr([])).to.be.true;
});

it('return `false` for non-arrays', function ()
{
    expect(isArr({})).to.be.false;
    expect(isArr(arguments)).to.be.false;
    expect(isArr(5)).to.be.false;
});