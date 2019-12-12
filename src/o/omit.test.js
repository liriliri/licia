expect(omit({ a: 1, b: 2 }, 'a')).to.eql({ b: 2 });
expect(omit({ a: 1, b: 2, c: 3 }, ['b', 'c'])).to.eql({ a: 1 });
expect(
    omit({ a: 1, b: 2, c: 3, d: 4 }, function(val) {
        return val % 2;
    })
).to.eql({ b: 2, d: 4 });
expect(
    omit({ a: 1, b: 2 }, function(val, key) {
        return key === 'a';
    })
).to.eql({ b: 2 });
