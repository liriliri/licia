var isBrowser = util.isBrowser;

it('borwser', function() {
    if (!isBrowser) return;

    var windowRaf = window.requestAnimationFrame;
    if (windowRaf) expect(raf).to.equal(windowRaf);
});

it('node', function(done) {
    if (isBrowser) {
        done();
        return;
    }

    var count = 0,
        id;

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
