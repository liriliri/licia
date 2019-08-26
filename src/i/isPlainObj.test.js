it('true', function() {
    expect(isPlainObj({})).to.be.true;
});

it('false', function() {
    expect(isPlainObj([])).to.be.false;
    expect(isPlainObj(function() {})).to.be.false;
    expect(isPlainObj(5)).to.be.false;

    const obj = {};
    obj.constructor = {};
    expect(isPlainObj(obj)).to.be.false;
});
