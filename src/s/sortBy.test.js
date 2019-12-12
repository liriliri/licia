expect(
    sortBy([1, 2, 3, 4, 5, 6], function(num) {
        return Math.sin(num);
    })
).to.eql([5, 4, 6, 3, 1, 2]);

expect(
    sortBy({ a: 1, b: 2, c: 3 }, function(val) {
        return 1 / val;
    })
).to.eql([3, 2, 1]);
