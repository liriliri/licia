it('basic', function ()
{
    var arr = [1, 3, 4, 5],
        result = sample(arr, 2);

    expect(result.length).to.equal(2);
    for (var i = 0; i < result.length; i++)
    {
        expect(arr.indexOf(result[i])).to.not.equal(-1);
    }

    var obj = {a: 1, b: 2, c: 3};
    result = sample(obj, 1);
    expect(result.length).to.equal(1);
});