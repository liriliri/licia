var readTpl = require('./share/readTpl'),
    util = require('./util');

module.exports = function ()
{
    var cmdName = options.argv.remain[0];
    util.contain(['benchmark', 'test', 'list', 'pack', 'doc'], cmdName) ? output(cmdName) : outputAll();
};

function outputAll()
{
    readTpl('help', function (err, tpl)
    {
        if (err) return console.log(err);

        console.log(tpl(help));
    });
}

function output(name)
{
    readTpl('helpCmd', function (err, tpl)
    {
        if (err) return console.log(err);

        console.log(tpl(helpData[name]));
    });
}

var help = {
    usage: [
        '<command> [<options>]'
    ],
    commands: {
        test: 'Generate test files',
        benchmark: 'Generate benchmark files',
        doc: 'Update documentation(doc.md)',
        list: 'Update module list(eris.json)',
        help: 'Display help information',
        pack: 'Transform files into commonjs modules'
    }
};

var helpData = {
    test: {
        command: 'test',
        desc: 'Generate test files.',
        usage: [
            'test <module-name> [<options>]',
            'test lpad --karma'
        ],
        options: [
            {
                'shorthand': '-k',
                'flag': '--karma',
                'desc': 'True if test should run in a browser.'
            },
            {
                'shorthand': '-a',
                'flag': '--all',
                'desc': 'Generate all tests.'
            },
            {
                'shorthand': '-h',
                'flag': '--html',
                'desc': 'Html test file.'
            },
            {
                'shorthand': '-s',
                'flag': '--silent',
                'desc': 'Disable output log.'
            }
        ]
    },
    benchmark: {
        command: 'benchmark',
        desc: 'Generate benchmark files.',
        usage: ['benchmark <module-name>']
    },
    doc: {
        command: 'doc',
        desc: 'Update documentation(doc.md).',
        usage: ['doc']
    },
    list: {
        command: 'list',
        desc: 'Update module list(eris.json).',
        usage: ['list']
    },
    pack: {
        command: 'pack',
        desc: 'Transform files into commonjs modules.',
        usage: ['pack']
    }
};