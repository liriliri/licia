expect(toInt(1.2)).to.equal(1);
expect(toInt(0)).to.equal(0);
expect(toInt('012')).to.equal(12);
expect(toInt(undefined)).to.equal(0);
