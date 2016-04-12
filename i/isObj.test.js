it('return `true` for objects', function ()
{
    expect(isObj({})).to.be.true;
    expect(isObj([])).to.be.true;
    expect(isObj(function () {})).to.be.true;
    expect(isObj(/x/)).to.be.true;
});

it('return `false` for non-objects', function ()
{
    expect(isObj(5)).to.be.false;
    expect(isObj('eris')).to.be.false;
    expect(isObj(null)).to.be.false;
});