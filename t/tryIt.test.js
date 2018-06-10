it('basic', function() {
    tryIt(
        function() {
            /* eslint-disable no-undef */
            callSomething();
        },
        function(err, result) {
            expect(err).to.be.an('error');
            expect(result).to.be.undefined;
        }
    );

    tryIt(
        function() {
            return 1 + 2;
        },
        function(err, result) {
            expect(err).to.be.null;
            expect(result).to.equal(3);
        }
    );
});
