expect(isSymbol(Symbol('test'))).to.be.true;
expect(isSymbol(function() {})).to.be.false;
