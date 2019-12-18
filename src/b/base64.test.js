const testData = [
    [[255, 255, 255], '////'],
    [[255, 255, 255, 255], '/////w=='],
    [[255, 255, 255, 255, 255], '//////8='],
    [[168, 174, 155, 255], 'qK6b/w==']
];

it('encode', () => tests(base64.encode)(testData));

it('decode', () => tests(base64.decode)(util.map(testData, util.reverse)));
