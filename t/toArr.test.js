it('convert value to an array', function ()
{
    expect(toArr({a: 1, b: 2})).to.deep.equal([{a: 1, b: 2}]);
    expect(toArr(5)).to.deep.equal([5]);
    expect(toArr(null)).to.deep.equal([]);
    expect(toArr('abc')).to.deep.equal(['abc']);
});