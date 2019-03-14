const glob = require('glob');
const eustia = require('eustia');
const trim = require('licia/trim');
const fs = require('licia/fs');
const waterfall = require('licia/waterfall');
const extractBlockCmts = require('licia/extractBlockCmts');
const startWith = require('licia/startWith');
const clone = require('licia/clone');
const keys = require('licia/keys');
const parallel = require('licia/parallel');
const each = require('licia/each');
const last = require('licia/last');
const extend = require('licia/extend');
const map = require('licia/map');

const util = require('./util');

let output = {};

const OUTPUT_PATH = 'index.json';
const OUTPUT_DOC_PATH = 'DOC.md';

module.exports = function() {
    waterfall([extractInfo, detectDemo, detectBenchmark], function(err) {
        if (err) return console.log(err);

        sortOutput();
        writeOutput();
        updateDoc();
    });
};

function splitH2(doc) {
    doc = doc.split(/^## /m);
    doc.shift();
    return doc.map(str => {
        str = str.split(/\n/);
        const name = str.shift().trim();
        return {
            name,
            content: trim(str.join('\n'))
        };
    });
}

async function genI18n() {
    let doc = await fs.readFile(OUTPUT_DOC_PATH, 'utf8');
    doc = splitH2(doc);

    const i18n = {};

    for (let i = 0, len = doc.length; i < len; i++) {
        const name = doc[i].name;
        const i18nPath =
            'src/' + name[0].toLowerCase() + '/' + name + '.i18n.md';
        if (await fs.exists(i18nPath)) {
            let doc = await fs.readFile(i18nPath, 'utf8');
            let code = await fs.readFile(
                i18nPath.replace('.i18n.md', '.js'),
                'utf8'
            );
            let comments = extractBlockCmts(code);
            let example = '';
            comments.forEach(comment => {
                comment = trim(comment);
                if (startWith(comment, 'example')) {
                    example = comment.replace(/^example/, '');
                    example = util.outdentOneSpace(example);
                    example = '```javascript\n' + trim(example) + '\n```';
                }
            });
            doc = splitH2(doc);
            doc.forEach(locale => {
                i18n[locale.name] = i18n[locale.name] || {};
                i18n[locale.name][name] = locale.content;
                if (example) {
                    i18n[locale.name][name] += '\n\n' + example;
                }
            });
        }
    }

    const locales = ['CN'];

    for (let i = 0, len = locales.length; i < len; i++) {
        const locale = locales[i];
        let output = doc.map(mod => {
            mod = clone(mod);
            if (i18n[locale] && i18n[locale][mod.name]) {
                mod.content = i18n[locale][mod.name];
            }
            return '## ' + mod.name + '\n\n' + mod.content;
        });
        output = output.join('\n\n');
        await fs.writeFile('DOC_' + locale + '.md', output, 'utf8');
        console.log('DOC_' + locale + '.md generated');
    }
}

function updateDoc() {
    eustia.build(
        {
            include: keys(output),
            enableLog: true,
            library: '$_abcdefghijklmnopqrstuvwxyz'
                .split('')
                .map(val => 'src/' + val),
            output: './testUtil/doc.js',
            ts: true
        },
        function() {
            eustia.doc(
                {
                    input: './testUtil/doc.js',
                    format: 'md',
                    output: OUTPUT_DOC_PATH
                },
                function() {
                    genI18n();
                }
            );
        }
    );
}

function extractInfo(cb) {
    glob(
        'src/*/*.js',
        {
            ignore: ['src/*/*.*.js']
        },
        function(err, files) {
            if (err) return cb(err);

            parallel(genCbs(files), function(err) {
                if (err) return cb(err);

                cb();
            });
        }
    );

    function genCbs(files) {
        let ret = [];

        each(files, function(file) {
            let modName = last(file.split('/')).slice(0, -3);

            ret.push(async function(cb) {
                const data = await fs.readFile(file, 'utf8');

                let desc = 'No description.';
                let comments = extractBlockCmts(data);

                if (comments.length > 0) {
                    desc = trim(comments[0]).split('\n')[0];
                }

                let modInfo = extend(
                    {
                        description: desc,
                        dependencies: extractDependencies(data)
                    },
                    extractCmts(comments)
                );
                output[modName] = modInfo;

                cb();
            });
        });

        return ret;
    }

    const regDependency = /\s*\b_\(\s*['"]([\w\s$]+)['"]\s*\);?/m;

    function extractDependencies(data) {
        let dependencies = regDependency.exec(data);
        dependencies = dependencies ? trim(dependencies[1]).split(/\s+/) : [];

        return dependencies;
    }

    function extractCmts(comments) {
        let ret = {};

        each(comments, function(comment) {
            let lines = trim(comment).split('\n');
            if (trim(lines[0]) !== 'module') return;
            lines.shift();
            each(lines, function(line) {
                let splitterPos = line.indexOf(':');
                let name = trim(line.slice(0, splitterPos));
                let val = trim(line.slice(splitterPos + 1));

                ret[name] = val;
            });
        });

        return ret;
    }
}

function detectBenchmark(cb) {
    glob('src/*/*benchmark.js', {}, function(err, files) {
        if (err) return cb(err);

        let list = map(files, function(file) {
            return file
                .split('/')
                .pop()
                .replace('.benchmark.js', '');
        });

        each(list, function(modName) {
            output[modName].benchmark = true;
        });

        cb();
    });
}

function detectDemo(cb) {
    glob('src/*/*Demo.html', {}, function(err, files) {
        if (err) return cb(err);

        let list = map(files, function(file) {
            return file
                .split('/')
                .pop()
                .replace('Demo.html', '');
        });

        each(list, function(modName) {
            output[modName].demo = true;
        });

        cb();
    });
}

function sortOutput() {
    let newOutput = [];

    each(output, function(val, key) {
        newOutput.push({
            key: key,
            val: val
        });
    });

    newOutput.sort(function(a, b) {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;

        return 0;
    });

    output = {};

    each(newOutput, function(val) {
        output[val.key] = val.val;
    });
}

function writeOutput() {
    fs.writeFile(
        OUTPUT_PATH,
        JSON.stringify(output, null, 4),
        'utf-8',
        function(err) {
            if (err) return console.log(err);

            console.log('Index file generated: ' + OUTPUT_PATH);
        }
    );
}
