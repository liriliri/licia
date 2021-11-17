const fs = require('fs');

it('basic', function(done) {
    fs.unlink(__dirname + '/mkdirTest/', function() {
        mkdir(__dirname + '/mkdirTest/1/2/3', function(err) {
            if (err) return done(err);

            fs.exists(__dirname + '/mkdirTest/1/2/3', function(exists) {
                expect(exists).to.be.true;
                done();
            });
        });
    });
});

it('sync', function() {
    try {
        fs.unlinkSync(__dirname + '/mkdirSyncTest');
    } catch (e) {}
    mkdir.sync(__dirname + '/mkdirSyncTest/1/2/3');
    expect(fs.existsSync(__dirname + '/mkdirSyncTest/1/2/3')).to.be.true;
});
