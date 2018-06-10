var each = util.each;

it('basic', function() {
    var tests = [[new Set(), true], [new WeakSet(), false], [{}, false]];

    each(tests, function(test) {
        expect(isSet(test[0])).to.equal(test[1]);
    });
});
