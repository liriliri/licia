it('callback', done => {
    function callbackFn(str, cb) {
        setTimeout(() => {
            cb(null, str);
        }, 10);
    }

    const fn = universalify(callbackFn, 'callback');
    fn('licia', (err, result) => {
        expect(result).to.equal('licia');
        fn('licia').then(result => {
            expect(result).to.equal('licia');
            done();
        });
    });
});

it('promise', done => {
    function promiseFn(str) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(str);
            }, 10);
        });
    }

    const fn = universalify(promiseFn, 'promise');
    fn('licia', (err, result) => {
        expect(result).to.equal('licia');
        fn('licia').then(result => {
            expect(result).to.equal('licia');
            done();
        });
    });
});
