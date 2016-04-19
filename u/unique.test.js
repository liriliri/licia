it('create duplicate-free version of an array', function ()
{
    expect(unique([1, 2, 3, 1]).length).to.equal(3);

    var arr = [{a: 2}, {a: 2}, {a: 3}, {a: 3}];

    expect(unique(arr, function (a, b)
    {
        return a.a === b.a;
    }).length).equal(2);
});