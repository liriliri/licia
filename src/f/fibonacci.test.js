var each = util.each;

it('basic', function() {
    var tests = [1, 1, 2, 3, 5, 8, 13, 21, 34];

    each(tests, function(test, idx) {
        expect(fibonacci(idx + 1)).to.equal(test);
    });
});
