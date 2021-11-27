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
    }, 0);
    expect(readiness.isReady('expectCalled')).to.be.false;
    readiness.ready(['countInitialized', 'expectCalled']).then(function() {
        expect(readiness.isReady('expectCalled')).to.be.true;
        done();
    });
});
