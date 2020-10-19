expect(randomId()).to.be.a('string');
expect(randomId().length).to.equal(21);
expect(randomId(12).length).to.equal(12);
expect(randomId(5, 'a')).to.equal('aaaaa');
