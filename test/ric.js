it('basic', done => {
    ric(val => {
        expect(val.didTimeout).to.be.a('boolean');
        expect(val.timeRemaining).to.be.a('function');
        done();
    });
});
