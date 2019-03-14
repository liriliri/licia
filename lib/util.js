const rmdir = require('licia/rmdir');
const promisify = require('licia/promisify');
const npm = require('npm');
const glob = require('glob');
const mkdir = require('licia/mkdir');
const fs = require('licia/fs');
const ncp = require('ncp');
const path = require('path');
const chalk = require('chalk');
const handlebars = require('handlebars');
const rpad = require('licia/rpad');
const eustia = require('eustia');

const regStartOneSpace = /^ /gm;

exports.outdentOneSpace = function(data) {
    return data.replace(regStartOneSpace, '');
};

exports.rmdir = promisify(rmdir);
exports.glob = promisify(glob);
exports.mkdir = promisify(mkdir);
exports.cpFile = promisify(ncp);

exports.fileExist = async function(path) {
    const exist = await fs.exists(path);
    if (!exist) throw Error(path + " doesn't not exist.");
};

exports.readTpl = async function(name, cb) {
    const data = await fs.readFile(
        path.resolve(__dirname, './tpl/' + name + '.hbs'),
        'utf-8'
    );

    return handlebars.compile(data, { noEscape: true });
};

handlebars.registerHelper('rapd', function(len, ctx) {
    return rpad(ctx.fn(this), +len, ' ');
});
['yellow', 'green', 'cyan', 'red', 'white', 'magenta'].forEach(function(color) {
    handlebars.registerHelper(color, function(ctx) {
        return chalk[color](ctx.fn(this));
    });
});

exports.eustiaBuild = promisify(eustia.build);
exports.eustiaDoc = promisify(eustia.doc);

exports.runScript = function(name, args) {
    return new Promise((resolve, reject) => {
        npm.load(function(err) {
            if (err) return reject(err);
            npm.commands.run([name].concat(args), function(err) {
                if (err) return reject(err);
                resolve();
            });
        });
    });
};
