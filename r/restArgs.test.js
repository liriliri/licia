it('basic', function() {
    restArgs(function(rest) {
        expect(rest).to.eql([1, 2, 3]);
    })(1, 2, 3);

    restArgs(function(a, rest) {
        expect(rest).to.eql([2, 3]);
    })(1, 2, 3);

    restArgs(function(a, b, rest) {
        expect(rest).to.eql([3]);
    })(1, 2, 3);

    restArgs(function(a, b, c, d, e, rest) {
        expect(rest).to.eql([6, 7, 8]);
    })(1, 2, 3, 4, 5, 6, 7, 8);
});

it('start index', function() {
    restArgs(function(a, b, rest) {
        expect(b).to.eql([2, 3]);
    }, 1)(1, 2, 3);
});
