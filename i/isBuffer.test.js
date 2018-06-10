it('true', function() {
    expect(isBuffer(new Buffer(4))).to.be.true;
    expect(isBuffer({ _isBuffer: true })).to.be.true;
});

it('false', function() {
    expect(isBuffer({})).to.be.false;
    expect(isBuffer(null)).to.be.false;
});
