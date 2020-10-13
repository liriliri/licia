const { contain, map, cliHelp } = require('licia');

module.exports = async function() {
    const cmdName = options.remain[0];
    if (
        contain(
            [
                'benchmark',
                'test',
                'build',
                'update',
                'format',
                'demo',
                'lint',
                'cspell'
            ],
            cmdName
        )
    ) {
        console.log(cliHelp(commands[cmdName]));
    } else {
        console.log(cliHelp(data));
    }
};

const commands = {
    test: {
        name: 'test',
        desc: 'Generate test files',
        usage: ['test [module] [options]', 'test lpad --browser'],
        options: [
            {
                shorthand: 'b',
                name: 'browser',
                desc: 'True if test should run in a browser'
            },
            {
                name: 'ts',
                desc: 'Generate typescript test file'
            },
            {
                shorthand: 'r',
                name: 'release',
                desc: 'Test generated node package'
            },
            {
                shorthand: 's',
                name: 'silent',
                desc: 'Disable output log'
            }
        ]
    },
    demo: {
        name: 'demo',
        desc: 'Generate html demo file',
        usage: ['demo [module]']
    },
    benchmark: {
        name: 'benchmark',
        desc: 'Generate benchmark files',
        usage: ['benchmark <module>']
    },
    format: {
        name: 'format',
        desc: 'Format module source code',
        usage: ['format [module]']
    },
    lint: {
        name: 'lint',
        desc: 'Lint module source code',
        usage: ['lint <module>']
    },
    spell: {
        name: 'spell',
        desc: 'Code spell checking',
        usage: ['spell <module>']
    },
    update: {
        name: 'update',
        desc: 'Update module info and documentation',
        usage: ['update']
    },
    build: {
        name: 'build',
        desc: 'Transform files into commonjs modules',
        usage: ['build']
    }
};

const data = {
    name: 'licia',
    usage: '<command> [options]',
    commands: map(commands, command => command)
};
