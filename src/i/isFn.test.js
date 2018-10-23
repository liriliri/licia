it('true', function() {
    expect(isFn(function() {})).to.be.true;
});

it('false', function() {
    expect(isFn(5)).to.be.false;
    expect(isFn({})).to.be.false;
});
