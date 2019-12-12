const each = util.each;

const tests = [
    [1, '1st'],
    [2, '2nd'],
    [3, '3rd'],
    [4, '4th'],
    [11, '11th'],
    [12, '12th'],
    [13, '13th'],
    [21, '21st'],
    [22, '22nd'],
    [23, '23rd'],
    [24, '24th']
];

each(tests, test => {
    expect(ordinal(test[0])).to.equal(test[1]);
});
