it('true', function() {
    expect(isBuffer(Buffer.alloc(4))).to.be.true;
    expect(isBuffer({ _isBuffer: true })).to.be.true;
});

it('false', function() {
    expect(isBuffer({})).to.be.false;
    expect(isBuffer(null)).to.be.false;
});
