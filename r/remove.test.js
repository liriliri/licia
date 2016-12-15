it('remove elements from array', function ()
{
    var arr = [1, 2, 3, 4, 5];
    var evens = remove(arr, function (val)
    {
        return val % 2 === 0;
    });
    expect(arr).to.eql([1, 3, 5]);
    expect(evens).to.eql([2, 4]);
});