var each = util.each;

var tests = [
    [[255, 255, 255], '////'],
    [[255, 255, 255, 255], '/////w=='],
    [[255, 255, 255, 255, 255], '//////8='],
    [[168, 174, 155, 255], 'qK6b/w==']
];

it('encode', function() {
    each(tests, function(test) {
        expect(base64.encode(test[0])).to.equal(test[1]);
    });
});

it('decode', function() {
    each(tests, function(test) {
        expect(base64.decode(test[1])).to.eql(test[0]);
    });
});
