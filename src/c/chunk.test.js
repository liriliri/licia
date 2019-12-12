expect(chunk([1, 2, 3, 4], 2)).to.eql([[1, 2], [3, 4]]);
expect(chunk([1, 2, 3, 4], 3)).to.eql([[1, 2, 3], [4]]);
expect(chunk([1, 2, 3, 4])).to.eql([[1], [2], [3], [4]]);
