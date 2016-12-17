it('generate random bytes', function ()
{
    expect(randomBytes(16).length).to.equal(16);
});