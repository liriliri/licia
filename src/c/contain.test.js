it('basic', () => {
    expect(contain([1, 2, 3], 1)).to.be.true;
    expect(contain([1, 2, 3], 4)).to.be.false;
});

it('object', () => {
    expect(contain({ a: 1, b: 2 }, 1)).to.be.true;
    expect(contain({ b: 2 }, 1)).to.be.false;
});

it('string', () => {
    expect(contain('abc', 'a')).to.be.true;
    expect(contain('abc', 'd')).to.be.false;
});
