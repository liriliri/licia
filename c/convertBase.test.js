it('basic', function ()
{
    expect(convertBase('10', 2, 10)).to.equal('2');
    expect(convertBase('ff', 16, 2)).to.equal('11111111');
});