const range = util.range;
const shuffle = util.shuffle;
const isSorted = util.isSorted;

expect(isSorted(shellSort(shuffle(range(1000))))).to.be.true;
expect(
    shellSort([1, 2, 3], function(a, b) {
        return b - a;
    })
).to.eql([3, 2, 1]);
