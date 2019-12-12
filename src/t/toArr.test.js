expect(toArr({ a: 1, b: 2 })).to.eql([{ a: 1, b: 2 }]);
expect(toArr(5)).to.eql([5]);
expect(toArr(null)).to.eql([]);
expect(toArr('abc')).to.eql(['abc']);
expect(toArr([1, 2, 3])).to.eql([1, 2, 3]);
