it('basic', done => {
    const worker = workerize(function(a, b) {
        return a + b;
    });
    worker(1, 2).then(function(value) {
        expect(value).to.equal(3);
        done();
    });
});
