it('true', function() {
    expect(isStr('eustia')).to.be.true;
});

it('false', function() {
    expect(isStr(5)).to.be.false;
});
