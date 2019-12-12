const tests = [
    [[255, 255, 255], '////'],
    [[255, 255, 255, 255], '/////w=='],
    [[255, 255, 255, 255, 255], '//////8='],
    [[168, 174, 155, 255], 'qK6b/w==']
];

it('encode', () => test(base64.encode)(tests));

it('decode', function() {
    util.each(tests, test => test.reverse());
    test(base64.decode)(tests);
});
