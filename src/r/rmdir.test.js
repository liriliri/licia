var fs = require('fs');

var mkdir = util.mkdir;

it('basic', function(done) {
    mkdir(__dirname + '/rmdirTest/1', function(err) {
        if (err) return done(err);
        rmdir(__dirname + '/rmdirTest', function(err) {
            if (err) return done(err);
            fs.exists(__dirname + '/rmdirTest', function(exists) {
                expect(exists).to.be.false;
                done();
            });
        });
    });
});
