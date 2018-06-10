var fs = require('fs');

module.exports = function(path, cb) {
    fs.readFile(path, 'utf-8', function(err, data) {
        if (err) return cb(err);

        cb(null, data);
    });
};
