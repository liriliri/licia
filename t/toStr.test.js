it('convert value to a string', function ()
{
    expect(toStr(null)).to.be.equal('');
    expect(toStr(undefined)).to.be.equal('');
    expect(toStr(1)).to.be.equal('1');
    expect(toStr([1, 2, 3])).to.be.equal('1,2,3');
    expect(toStr(false)).to.be.equal('false');
});