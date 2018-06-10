it('basic', function(done) {
    var count = 1;

    delay(
        function(val) {
            count = val;
        },
        100,
        5
    );

    expect(count).to.equal(1);

    setTimeout(function() {
        expect(count).to.equal(5);
        done();
    }, 200);
});
