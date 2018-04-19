it('basic', function () 
{
    expect(strHash('test')).to.equal(strHash('test'));
    for (var i = 0; i < 1000; i++) 
    {
        expect(strHash('test' + i)).to.be.at.least(0);
    }
});