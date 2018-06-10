var fs = require('fs');

module.exports = function(path, cb) {
    fs.exists(path, function(exist) {
        exist ? cb() : cb(new Error(path + " doesn't not exist."));
    });
};
