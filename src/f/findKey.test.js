it('basic', function() {
    expect(
        findKey({ a: 1, b: 2 }, function(val) {
            return val === 1;
        })
    ).to.equal('a');
    expect(
        findKey({ a: 1 }, function(val) {
            return val === 2;
        })
    ).to.be.an('undefined');
});
