var npm = require('npm');

var util = require('../util');

module.exports = function(name, args, cb) {
    cb = cb || util.noop;

    npm.load(function(err) {
        if (err) return cb(err);
        npm.commands.run([name].concat(args), function(err) {
            if (err) return cb(err);
            cb();
        });
    });
};
