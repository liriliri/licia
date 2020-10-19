it('basic', done => {
    let invoked = false;

    nextTick(() => (invoked = true));

    expect(invoked).to.be.false;

    setTimeout(() => {
        expect(invoked).to.be.true;
        done();
    }, 10);
});
