it('basic', function ()
{
    expect(contain([1, 2, 3], 1)).to.be.true;
    expect(contain([1, 2, 3], 4)).to.be.false;
});

it('object', function () 
{
    expect(contain({a: 1, b: 2}, 1)).to.be.true;
    expect(contain({b: 2}, 1)).to.be.false;
});