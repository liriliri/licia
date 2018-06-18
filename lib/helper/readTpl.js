var fs = require('fs'),
    path = require('path'),
    chalk = require('chalk'),
    handlebars = require('handlebars');

var util = require('../util');

module.exports = function(name, cb) {
    fs.readFile(
        path.resolve(__dirname, '../tpl/' + name + '.hbs'),
        'utf-8',
        function(err, data) {
            if (err) return cb(err);

            cb(null, handlebars.compile(data, { noEscape: true }), name);
        }
    );
};

handlebars.registerHelper('rapd', function(len, ctx) {
    return util.rpad(ctx.fn(this), +len, ' ');
});
['yellow', 'green', 'cyan', 'red', 'white', 'magenta'].forEach(function(color) {
    handlebars.registerHelper(color, function(ctx) {
        return chalk[color](ctx.fn(this));
    });
});
