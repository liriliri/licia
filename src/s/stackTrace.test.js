const contain = util.contain;

it('basic', () => {
    const stack = stackTrace();
    expect(contain(stack[0].getFileName(), 'stackTrace')).to.be.true;
});
