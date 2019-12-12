expect(centerAlign('test', 8)).to.equal('  test');
expect(centerAlign('test\nlines', 8)).to.equal('  test\n lines');
expect(centerAlign(['test', 'lines'], 8)).to.equal('  test\n lines');
