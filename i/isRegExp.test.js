it('true', function() {
    expect(isRegExp(/a/)).to.be.true;
    expect(isRegExp(new RegExp(''))).to.be.true;
});

it('false', function() {
    expect(isRegExp(5)).to.be.false;
});
