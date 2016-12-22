it('shuffle array', function ()
{
    var arr = [2.3, 100, 75, 120],
        result = shuffle(arr),
        len = result.length;

    expect(len).to.equal(4);
    for (var i = 0; i < len; i++)
    {
        expect(arr.indexOf(result[i])).to.not.equal(-1);
    }
});