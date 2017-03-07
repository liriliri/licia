it('basic', function ()
{
    expect(noop).to.be.a('function');
    expect(noop()).to.be.an('undefined');
});
