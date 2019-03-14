const npm = require('npm');
const noop = require('licia/noop');

module.exports = function(name, args, cb) {
    cb = cb || noop;

    npm.load(function(err) {
        if (err) return cb(err);
        npm.commands.run([name].concat(args), function(err) {
            if (err) return cb(err);
            cb();
        });
    });
};
