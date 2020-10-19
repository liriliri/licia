it('basic', function() {
    const t = through(function(chunk, enc, cb) {
        for (let i = 0, len = chunk.length; i < len; i++) {
            chunk[i]++;
        }
        this.push(chunk);
        cb();
    });

    t.on('data', function(chunk) {
        expect(chunk.toString('ascii')).to.equal('ifmmp');
    });

    t.write('hello');
    t.end();
});

it('obj', function() {
    const t = through.obj(function(chunk, enc, cb) {
        chunk.a++;
        this.push(chunk);
        cb();
    });

    t.on('data', function(chunk) {
        expect(chunk).to.eql({ a: 2 });
    });

    t.write({ a: 1 });
    t.end();
});

it('ctor', function() {
    const Through = through.ctor(function(chunk, enc, cb) {
        chunk.a++;
        this.push(chunk);
        cb();
    });

    const t = new Through({ objectMode: true });
    t.on('data', function(chunk) {
        expect(chunk).to.eql({ a: 2 });
    });

    t.write({ a: 1 });
    t.end();
});
