it('basic', function(done) {
    let counter = 0;

    const debounceFn = debounce(function() {
        counter++;
    }, 50);

    debounceFn();
    debounceFn();
    debounceFn();
    setTimeout(debounceFn, 30);
    setTimeout(debounceFn, 60);
    setTimeout(debounceFn, 90);
    setTimeout(debounceFn, 120);
    setTimeout(debounceFn, 150);

    setTimeout(function() {
        expect(counter).to.equal(1);
        done();
    }, 300);
});
