it('true', function() {
    expect(isNum(5)).to.be.true;
    expect(isNum(5.1)).to.be.true;
});

it('false', function() {
    expect(isNum({})).to.be.false;
});
