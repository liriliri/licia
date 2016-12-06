it('create a function that wraps isMatch', function ()
{
    var objects = [
        {a: 1, b: 2, c: 3},
        {a: 4, b: 5, c: 6}
    ];

    expect(objects.filter(matcher({a: 4, c: 6}))).to.eql([{a: 4, b: 5, c: 6}]);
});