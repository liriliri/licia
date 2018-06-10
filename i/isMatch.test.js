it('true', function() {
    expect(isMatch({ a: 1, b: 2 }, { a: 1 })).to.be.true;
    expect(isMatch(null, {})).to.be.true;
});

it('false', function() {
    expect(isMatch({ a: 1 }, { b: 2 })).to.be.false;
    expect(isMatch(null, { b: 2 })).to.be.false;
});
