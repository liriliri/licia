it('basic', function(done) {
    const start = perfNow();

    setTimeout(function() {
        const end = perfNow();
        expect(start).to.be.a('number');
        expect(end).to.be.above(start);
        done();
    }, 10);
});
