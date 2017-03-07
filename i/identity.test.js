it('basic', function ()
{
    expect(identity(1)).to.equal(1);
    expect(identity('a')).to.equal('a');
});