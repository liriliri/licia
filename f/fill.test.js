it('basic', function() {
    expect(fill([1, 2, 3], '*')).to.eql(['*', '*', '*']);
    expect(fill([1, 2, 3], '*', 1, 2)).to.eql([1, '*', 3]);
});
