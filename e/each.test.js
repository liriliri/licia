it('iterates over elements of collection', function ()
{
    var ctx = {keys: []};

    each({a: 1, b: 2}, function (val, key)
    {
        this.keys.push(key);
    }, ctx);

    expect(ctx.keys).to.contain('a');
    expect(ctx.keys).to.contain('b');
});