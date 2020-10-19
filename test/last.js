it('basic', function() {
    expect(last([1, 2])).to.equal(2);
});

it('undefined if empty', function() {
    expect(last([])).to.be.undefined;
});
