it('true', function ()
{
    expect(isObj({})).to.be.true;
    expect(isObj([])).to.be.true;
    expect(isObj(function () {})).to.be.true;
    expect(isObj(/x/)).to.be.true;
});

it('false', function ()
{
    expect(isObj(5)).to.be.false;
    expect(isObj('licia')).to.be.false;
    expect(isObj(null)).to.be.false;
});