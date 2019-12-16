const each = util.each;

const testData = [1, 1, 2, 3, 5, 8, 13, 21, 34];

each(testData, function(test, idx) {
    expect(fibonacci(idx + 1)).to.equal(test);
});
