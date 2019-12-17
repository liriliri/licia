const testData = [
    [[0, 0, 0], '000000'],
    [[255, 255, 255], 'ffffff'],
    [[168, 174, 155, 255], 'a8ae9bff']
];

const testDataReverse = util.map(testData, test => test.slice().reverse());

it('encode', () => tests(hex.encode)(testData));

it('decode', () => {
    tests(hex.decode)(testDataReverse);
    test(hex.decode)(['a8ae9bf', [168, 174, 155]]);
});
