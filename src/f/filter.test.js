expect(
    filter([1, 2, 3, 4, 5], function(val) {
        return val % 2 === 0;
    })
).to.eql([2, 4]);
