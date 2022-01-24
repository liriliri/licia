it('basic', function(done) {
    let count = 0;
    let id;

    function update() {
        count++;
        id = raf(update);
    }

    id = raf(update);

    setTimeout(function() {
        raf.cancel(id);
        expect(count > 2).to.be.true;
        done();
    }, 50);
});
