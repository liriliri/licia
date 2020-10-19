const testData = [
    [[0, 0, 0], '000000'],
    [[255, 255, 255], 'ffffff'],
    [[168, 174, 155, 255], 'a8ae9bff']
];

it('encode', () => tests(hex.encode)(testData));

it('decode', () => {
    tests(hex.decode)(util.map(testData, util.reverse));
    test(hex.decode)(['a8ae9bf', [168, 174, 155]]);
});
