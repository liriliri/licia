expect(
    mapObj({ a: 1, b: 2 }, function(val) {
        return val + 1;
    })
).to.eql({ a: 2, b: 3 });
