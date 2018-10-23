it('basic', function() {
    expect(isClose(1, 1.0000000001)).to.be.true;
    expect(isClose(1, 2)).to.be.false;
});

it('relative tolerance', function() {
    expect(isClose(1, 1.2, 0.3)).to.be.true;
});

it('absolute tolerance', function() {
    expect(isClose(1, 1.2, 0.1, 0.3)).to.be.true;
});
