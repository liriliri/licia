it('intersect arrays', function ()
{
    expect(intersect([2, 4, 3, 1, 5], [1, 2, 3])).to.eql([2, 3, 1]);
});