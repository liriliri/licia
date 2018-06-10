var glob = require('glob'),
    eustia = require('eustia'),
    fs = require('fs');

var util = require('./util');

var output = {},
    ignore = [
        '*node_modules/*.js',
        '*test/*.js',
        '*testUtil/*.js',
        '*demo/*.js',
        '*benchmark/*.js',
        '*lib/*.js',
        '*bin/*.js',
        '*npm/*.js'
    ];

var OUTPUT_PATH = 'index.json',
    OUTPUT_DOC_PATH = 'doc.md';

module.exports = function() {
    util.waterfall([extractInfo, detectDemo, detectBenchmark], function(err) {
        if (err) return console.log(err);

        sortOutput();
        writeOutput();
        updateDoc();
    });
};

function updateDoc() {
    eustia.build(
        {
            include: util.keys(output),
            enableLog: true,
            library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
            output: './testUtil/doc.js'
        },
        function() {
            eustia.doc({
                input: './testUtil/doc.js',
                format: 'md',
                output: './doc.md'
            });
        }
    );
}

function extractInfo(cb) {
    var ignorePattern = util.clone(ignore);
    ignorePattern.push('*/*.*.js');

    glob(
        '*/*.js',
        {
            ignore: ignorePattern
        },
        function(err, files) {
            if (err) return cb(err);

            util.parallel(genCbs(files), function(err) {
                if (err) return cb(err);

                cb();
            });
        }
    );

    function genCbs(files) {
        var ret = [];

        util.each(files, function(file) {
            var modName = util.last(file.split('/')).slice(0, -3);

            ret.push(function(cb) {
                fs.readFile(file, 'utf-8', function(err, data) {
                    if (err) return cb(err);

                    var desc = 'No description.';

                    var comments = util.extractBlockCmts(data);

                    if (comments.length > 0)
                        desc = util.trim(comments[0]).split('\n')[0];

                    var modInfo = util.extend(
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
        });

        return ret;
    }

    var regDependency = /\s*\b_\(\s*['"]([\w\s$]+)['"]\s*\);?/m;

    function extractDependencies(data) {
        var dependencies = regDependency.exec(data);
        dependencies = dependencies
            ? util.trim(dependencies[1]).split(/\s+/)
            : [];

        return dependencies;
    }

    function extractCmts(comments) {
        var ret = {};

        util.each(comments, function(comment) {
            var lines = util.trim(comment).split('\n');
            if (util.trim(lines[0]) !== 'module') return;
            lines.shift();
            util.each(lines, function(line) {
                var splitterPos = line.indexOf(':'),
                    name = util.trim(line.slice(0, splitterPos)),
                    val = util.trim(line.slice(splitterPos + 1));

                ret[name] = val;
            });
        });

        return ret;
    }
}

function detectBenchmark(cb) {
    glob(
        '*/*benchmark.js',
        {
            ignore: ignore
        },
        function(err, files) {
            console.log(files);
            if (err) return cb(err);

            var list = util.map(files, function(file) {
                return file
                    .split('/')
                    .pop()
                    .replace('.benchmark.js', '');
            });

            util.each(list, function(modName) {
                output[modName].benchmark = true;
            });

            cb();
        }
    );
}

function detectDemo(cb) {
    glob(
        '*/*Demo.html',
        {
            ignore: ignore
        },
        function(err, files) {
            if (err) return cb(err);

            var list = util.map(files, function(file) {
                return file
                    .split('/')
                    .pop()
                    .replace('Demo.html', '');
            });

            util.each(list, function(modName) {
                output[modName].demo = true;
            });

            cb();
        }
    );
}

function sortOutput() {
    var newOutput = [];

    util.each(output, function(val, key) {
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

    util.each(newOutput, function(val) {
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
