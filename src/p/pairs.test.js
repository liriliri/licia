it('basic', function() {
    expect(pairs({ a: 1, b: 2 })).to.eql([['a', 1], ['b', 2]]);
});
