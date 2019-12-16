const testData = [
    [[255, 255, 255], '////'],
    [[255, 255, 255, 255], '/////w=='],
    [[255, 255, 255, 255, 255], '//////8='],
    [[168, 174, 155, 255], 'qK6b/w==']
];

it('encode', () => tests(base64.encode)(testData));

it('decode', function() {
    util.each(testData, test => test.reverse());
    tests(base64.decode)(testData);
});
