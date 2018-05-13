var contain = util.contain,
    range = util.range;

it('basic', function () 
{
    var arr = range(1000);
    for (var i = 0; i < 1000; i++) 
    {
        expect(contain(arr, randomItem(arr))).to.be.true;
    }
});