/* scripts
 * before: npm i --prefix .licia promises-aplus-tests@2.1.2 
 */

const adapter = {
    resolved: Promise.resolve,
    rejected: Promise.rejected,
    deferred() {
        const obj = {};
        const prom = new Promise(function(resolve, reject) {
            obj.resolve = resolve;
            obj.reject = reject;
        });
        obj.promise = prom;

        return obj;
    }
};

require('promises-aplus-tests').mocha(adapter);

it('all', function(done) {
    expect(Promise.all([])).to.be.an.instanceof(Promise);

    let step = 0;

    Promise.all([
        new Promise(function(resolve) {
            resolve('a');
        }),
        new Promise(function(resolve) {
            resolve('b');
        })
    ]).then(function(results) {
        expect(results).to.eql(['a', 'b']);
        step++;
        if (step === 2) done();
    });

    Promise.all([
        new Promise(function(resolve) {
            resolve('a');
        }),
        new Promise(function() {
            throw new Error('error');
        })
    ]).catch(function(val) {
        expect(val).to.be.an('error');
        step++;
        if (step === 2) done();
    });
});

it('reject', function(done) {
    const promise = Promise.reject('a');

    promise.catch(function(val) {
        expect(val).to.equal('a');
        done();
    });
});

it('race', function(done) {
    expect(Promise.race([])).to.be.an.instanceof(Promise);

    Promise.race([
        new Promise(function(resolve) {
            resolve('a');
        }),
        new Promise(function(resolve) {
            setTimeout(function() {
                resolve('b');
            }, 50);
        })
    ]).then(function(val) {
        expect(val).to.equal('a');
        done();
    });
});
