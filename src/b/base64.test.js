const testData = [
    [[255, 255, 255], '////'],
    [[255, 255, 255, 255], '/////w=='],
    [[255, 255, 255, 255, 255], '//////8='],
    [[168, 174, 155, 255], 'qK6b/w==']
];

const testDataReverse = util.map(testData, test => test.slice().reverse());

it('encode', () => tests(base64.encode)(testData));

it('decode', () => tests(base64.decode)(testDataReverse));
