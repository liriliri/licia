it('basic', function() {
    var t = through(function(chunk, enc, cb) {
        for (var i = 0, len = chunk.length; i < len; i++) {
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
    var t = through.obj(function(chunk, enc, cb) {
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
    var Through = through.ctor(function(chunk, enc, cb) {
        chunk.a++;
        this.push(chunk);
        cb();
    });

    var t = new Through({ objectMode: true });
    t.on('data', function(chunk) {
        expect(chunk).to.eql({ a: 2 });
    });

    t.write({ a: 1 });
    t.end();
});
