var each = util.each;

it('basic', function() {
    var tests = [[2000, true], [2002, false], [2004, true], [1900, false]];

    each(tests, function(test) {
        expect(isLeapYear(test[0])).to.equal(test[1]);
    });
});
