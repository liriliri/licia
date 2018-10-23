it('basic', function() {
    expect(unzip([['a', 1, true], ['b', 2, false]])).to.eql([
        ['a', 'b'],
        [1, 2],
        [true, false]
    ]);
});
