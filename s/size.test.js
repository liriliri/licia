it('get the size of arrays and objects', function ()
{
    expect(size({a: 1, b: 2})).to.equal(2);
    expect(size([1, 2, 3])).to.equal(3);
});