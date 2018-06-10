it('true', function() {
    expect(isArr([])).to.be.true;
});

it('false', function() {
    expect(isArr({})).to.be.false;
    expect(isArr(arguments)).to.be.false;
    expect(isArr(5)).to.be.false;
});
