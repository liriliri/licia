it('object', function ()
{
    var ctx = {keys: []};

    each({a: 1, b: 2}, function (val, key)
    {
        this.keys.push(key);
    }, ctx);

    expect(ctx.keys).to.contain('a');
    expect(ctx.keys).to.contain('b');
});

it('array', function () 
{
    var arr = [0, 1];
    each(arr, function (val, i) 
    {
        arr[i] = val * 2;
    });

    expect(arr).to.eql([0, 2]);
});