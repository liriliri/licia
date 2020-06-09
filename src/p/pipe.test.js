const through = util.through;

it('basic', function() {
    function fn(chunk, enc, cb) {
        this.push(chunk);
        cb();
    }

    const t1 = through(fn);
    const t2 = through(fn);
    pipe(t1, t2);
    t2.on('data', function(chunk) {
        expect(chunk.toString('ascii')).to.equal('hello');
    });
    t1.write('hello');
    t1.end();
    t2.end();
});
