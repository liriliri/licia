it('play', function(done) {
    const tween = new Tween({ a: 0 });

    tween.on('update', function(target) {
        expect(target.a).to.be.at.least(0);
    });

    tween.on('end', function(target) {
        expect(target.a).to.equal(100);
        done();
    });

    tween.to({ a: 100 }, 100, 'linear').play();
});

it('pause', function(done) {
    const obj = { a: 0 };

    const tween = new Tween(obj);

    tween.to({ a: 100 }, 100).play();
    expect(tween.paused()).to.equal(false);

    setTimeout(function() {
        tween.pause();
    }, 50);

    setTimeout(function() {
        expect(obj.a).to.below(100);
        expect(tween.paused()).to.equal(true);
        done();
    }, 80);
});

it('progress', function() {
    const obj = { a: 0 };

    const tween = new Tween(obj);
    tween.to({ a: 100 }, 100);

    expect(tween.progress()).to.equal(0);
    tween.progress(1);
    expect(obj.a).to.equal(100);
    expect(tween.progress()).to.equal(1);
});
