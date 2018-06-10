var each = util.each;

it('basic', function() {
    var tests = [
        ['1s', 1000],
        ['1m', 60000],
        ['1.5h', 5400000],
        ['1d', 86400000],
        ['1y', 31557600000],
        ['1000', 1000],
        [1500, '1.5s'],
        [60000, '1m']
    ];

    each(tests, function(test) {
        expect(ms(test[0])).to.equal(test[1]);
    });
});
