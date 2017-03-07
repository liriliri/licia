it('basic', function ()
{
    function add(a, b, c)
    {
        return a + b + c;
    }

    var curriedAdd = curry(add);
    expect(curriedAdd(1, 2, 3)).to.equal(6);
    expect(curriedAdd(1, 2)).to.be.a('function');
    expect(curriedAdd(1)(2)).to.be.a('function');
    expect(curriedAdd(1)(2)(3)).to.equal(6);
    expect(curriedAdd(1, 2)(3)).to.equal(6);
    expect(curriedAdd(1)(2, 3)).to.equal(6);
    expect(curriedAdd(1, 2)(3, 4)).to.equal(6);
});