const each = util.each;

const tests = [
    [new ArrayBuffer(8), true],
    [[], false],
    [new Int16Array(), false],
    [null, false]
];

each(tests, function(test) {
    expect(isArrBuffer(test[0])).to.equal(test[1]);
});
