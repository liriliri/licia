expect(concat()).to.eql([]);
expect(concat([1, 2], [3], [4, 5])).to.eql([1, 2, 3, 4, 5]);
