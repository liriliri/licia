it('true', function() {
    expect(isUndef(void 0)).to.be.true;
});

it('false', function() {
    const b = 1;

    expect(isUndef(b)).to.be.false;
    expect(isUndef(null)).to.be.false;
});
