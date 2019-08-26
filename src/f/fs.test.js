const path = __dirname + '/test.js';

it('basic', function(done) {
    fs.writeFile(path, 'test', 'utf8')
        .then(function() {
            return fs.readFile(path, 'utf8');
        })
        .then(function(data) {
            expect(data).to.equal('test');
            done();
        });
});

it('exists', function(done) {
    fs.exists(path).then(function(exists) {
        expect(exists).to.be.true;
        fs.unlink(path).then(() => done());
    });
});
