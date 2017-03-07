it('basic', function ()
{
    expect(map([2, 4], function (n) { return n * n})).to.eql([4, 16]);
});

it('object', function () 
{
    expect(map({a: 1, b: 2}, function (n) 
    {
        return n * n;
    })).to.eql([1, 4]);
});