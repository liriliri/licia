it('basic', function () 
{
    expect(ms('1s')).to.equal(1000); 
    expect(ms('1m')).to.equal(60000);
    expect(ms('1.5h')).to.equal(5400000);
    expect(ms('1d')).to.equal(86400000);
    expect(ms('1y')).to.equal(31557600000);
    expect(ms('1000')).to.equal(1000);
});