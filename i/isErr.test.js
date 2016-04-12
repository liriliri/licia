it('should return `true` for Error objects', function ()
{
    expect(isErr(new Error())).to.be.true;
    expect(isErr(5)).to.be.false;
});