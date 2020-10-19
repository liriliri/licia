expect(heapSort([3, 2, 1])).to.eql([1, 2, 3]);
expect(
    heapSort([1, 2, 3], function(a, b) {
        return b - a;
    })
).to.eql([3, 2, 1]);
