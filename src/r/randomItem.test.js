const contain = util.contain;
const range = util.range;

it('basic', function() {
    const arr = range(1000);
    for (let i = 0; i < 1000; i++) {
        expect(contain(arr, randomItem(arr))).to.be.true;
    }
});
