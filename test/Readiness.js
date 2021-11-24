it('basic', function(done) {
    const readiness = new Readiness();
    readiness.ready('countInitialized', function() {
        expect(count).to.equal(1);
        readiness.signal('expectCalled');
    });
    let count;
    setTimeout(function() {
        count = 1;
        readiness.signal('countInitialized');
    });
    readiness.ready(['countInitialized', 'expectCalled'], function() {
        done();
    });
});
