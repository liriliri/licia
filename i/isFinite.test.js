it('true', function() {
    expect(isFinite(3)).to.be.true;
});

it('false', function() {
    expect(isFinite(Infinity)).to.be.false;
});
