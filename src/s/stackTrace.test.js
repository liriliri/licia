const contain = util.contain;

const stack = stackTrace();
expect(contain(stack[0].getFileName(), 'stackTrace')).to.be.true;
