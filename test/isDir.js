const { expect } = require('chai');

const mkdir = util.mkdir;
const rmdir = util.rmdir;

it('basic', function(done) {
    const dir = __dirname + '/isDirTest/';
    mkdir(dir, function(err) {
        if (err) {
            return done(err);
        }

        isDir(dir).then(result => {
            rmdir(dir);
            expect(result).to.be.true;
            done();
        });
    });
});
