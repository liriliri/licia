expect(isRelative('README.md')).to.be.true;
expect(isRelative('/home/test.txt')).to.be.false;
expect(isRelative('d:\\test.txt')).to.be.false;
