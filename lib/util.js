const {
    rmdir,
    promisify,
    mkdir,
    fs,
    rpad,
    ansiColor,
    trim,
    rtrim,
    extractBlockCmts,
    each,
    map,
    startWith
} = require('licia');
const execa = require('execa');
const glob = require('glob');
const ncp = require('ncp');
const path = require('path');
const handlebars = require('handlebars');
const eustia = require('eustia');

const regStartOneSpace = /^ /gm;

exports.outdentOneSpace = function(data) {
    return data.replace(regStartOneSpace, '');
};

exports.glob = promisify(glob);
exports.cpFile = promisify(ncp);

exports.fileExist = async function(path) {
    const exist = await fs.exists(path);
    if (!exist) throw Error(path + ' does not exist.');
};

exports.readTpl = async function(name) {
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
        return ansiColor[color](ctx.fn(this));
    });
});

exports.eustiaBuild = promisify(eustia.build);
exports.eustiaDoc = promisify(eustia.doc);

exports.runScript = function(name, args) {
    return execa(name, args, {
        preferLocal: true,
        cwd: path.resolve(__dirname, '../'),
        stdio: 'inherit'
    });
};

exports.runScripts = async function(scripts) {
    for (let i = 0, len = scripts.length; i < len; i++) {
        const script = scripts[i];
        await exports.runScript(script.name, script.args);
    }
};

exports.regDependencies = /\s*\b_\(\s*['"]([\w\s$]+)['"]\s*\);?/m;

exports.extractDependencies = function(data) {
    const dependencies = data.match(exports.regDependencies);

    return dependencies ? trim(dependencies[1]).split(/\s+/g) : [];
};

exports.extractComment = function(data, name) {
    const comments = extractBlockCmts(data);

    let ret = '';

    each(comments, comment => {
        comment = trim(comment);
        if (startWith(comment, name)) {
            ret = comment;
        }
    });

    ret = ret.replace(new RegExp('^' + name, ''), '');

    return trim(exports.outdentOneSpace(ret));
};

exports.extractScripts = function(data) {
    const scripts = {};

    const comment = exports.extractComment(data, 'scripts');

    const lines = trim(comment).split('\n');
    each(lines, function(line) {
        const splitterPos = line.indexOf(':');
        const name = trim(line.slice(0, splitterPos));
        const commands = trim(line.slice(splitterPos + 1)).split('&&');
        scripts[name] = map(commands, command => {
            command = command.split(/\s+/);
            return {
                name: command.shift(),
                args: command
            };
        });
    });

    return scripts;
};

exports.replaceComment = function(data, name, content) {
    const lines = map(content.split('\n'), line => rtrim(' * ' + line));

    let replacement = trim(lines.join('\n'))
        .replace(/\/\*/g, '\\/*')
        .replace(/\*\//g, '*\\/');
    replacement = `/* ${name}\n ${replacement}/`;

    return data.replace(
        new RegExp(`\\/\\* ${name}[\\s\\S]*?\\*\\/`, 'm'),
        replacement
    );
};

exports.rmdir = async function(path) {
    try {
        await rmdir('.licia/' + path);
    } catch (e) {
        /* eslint-disable no-empty */
    }
};

exports.mkdir = async function(path) {
    return await mkdir('.licia/' + path);
};
