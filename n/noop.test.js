it('is a function and return nothing', function ()
{
    expect(noop).to.be.a('function');
    expect(noop()).to.be.an('undefined');
});
