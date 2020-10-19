const sleep = util.sleep;

it('basic', done => {
    const fn = toAsync(function*() {
        yield sleep(200);
        return 'licia';
    });

    fn().then(str => {
        expect(str).to.equal('licia');
        done();
    });
});

it('accept generator function only', () => {
    expect(function() {
        toAsync(function() {});
    }).to.throw();
});

it('yield a promise only', done => {
    const fn = toAsync(function*() {
        yield 1;
    });
    fn().catch(err => {
        expect(err).to.be.an('error');
        done();
    });
});
