it('basic', function() {
    const arr = [2.3, 100, 75, 120];
    const result = shuffle(arr);
    const len = result.length;

    expect(len).to.equal(4);
    for (let i = 0; i < len; i++) {
        expect(arr.indexOf(result[i])).to.not.equal(-1);
    }
});
