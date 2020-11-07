it('basic', function(done) {
    let counter = 0;

    const throttleFn = throttle(function() {
        counter++;
    }, 50);

    throttleFn();
    throttleFn();
    throttleFn();
    setTimeout(throttleFn, 70);
    setTimeout(throttleFn, 75);
    setTimeout(throttleFn, 160);
    setTimeout(throttleFn, 165);

    setTimeout(function() {
        expect(counter).to.equal(3);
        done();
    }, 300);
});
