const promiseFn = function(value) {
    return new Promise(function(resolve, reject) {
        if (value < 5) return reject(new Error("value shouldn't less then 5"));

        resolve(value * 2);
    });
};

it('basic', function() {
    const cbFn = callbackify(promiseFn);

    cbFn(4, function(err) {
        expect(err).to.be.an('error');
    });

    cbFn(5, function(err, value) {
        expect(err).to.be.null;
        expect(value).to.equal(10);
    });
});
