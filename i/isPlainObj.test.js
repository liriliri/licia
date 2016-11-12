it('check if is a plain object', function ()
{
    expect(isPlainObj({})).to.be.true;
    expect(isPlainObj([])).to.be.false;
    expect(isPlainObj(function () {})).to.be.false;
    expect(isPlainObj(5)).to.be.false;
});