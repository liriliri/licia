it('basic', function ()
{
    expect(slice([1, 2, 3, 4], 1, 2)).to.eql([2]);
    expect(slice([1, 2, 3, 4], 0, -2)).to.eql([1, 2]);
    expect(slice([1, 2, 3, 4], -2, 3)).to.eql([3]);
});

it('without start and end', function () 
{
    expect(slice([1, 2, 3, 4], 2)).to.eql([3, 4]);
    expect(slice([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
});