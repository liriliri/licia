it('convert value to an array', function ()
{
    expect(toArr({a: 1, b:2}).length).to.equal(2);
    expect(toArr(5)).to.deep.equal([5]);
    expect(toArr(null)).to.deep.equal([]);
    expect(toArr('abc')).to.deep.equal(['a', 'b', 'c']);
});