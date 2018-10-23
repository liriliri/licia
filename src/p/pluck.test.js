it('basic', function() {
    var stooges = [
        { name: 'moe', age: 40 },
        { name: 'larry', age: 50 },
        { name: 'curly', age: 60 }
    ];

    expect(pluck(stooges, 'name')).to.eql(['moe', 'larry', 'curly']);
});
