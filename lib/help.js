const { contain } = require('licia');

const { readTpl } = require('./util');

module.exports = async function() {
    let cmdName = options.argv.remain[0];
    if (contain(['benchmark', 'test', 'pack', 'update'], cmdName)) {
        await output(cmdName);
    } else {
        await outputAll();
    }
};

async function outputAll() {
    const tpl = await readTpl('help');

    console.log(tpl(help));
}

async function output(name) {
    const tpl = await readTpl('helpCmd');

    console.log(tpl(helpData[name]));
}

const help = {
    usage: ['<command> [<options>]'],
    commands: {
        test: 'Generate test files',
        benchmark: 'Generate benchmark files',
        update: 'Update module info and documentation',
        pack: 'Transform files into commonjs modules',
        help: 'Display help information'
    }
};

const helpData = {
    test: {
        command: 'test',
        desc: 'Generate test files.',
        usage: ['test <module-name> [<options>]', 'test lpad --karma'],
        options: [
            {
                shorthand: '-k',
                flag: '--karma',
                desc: 'True if test should run in a browser.'
            },
            {
                shorthand: '-a',
                flag: '--all',
                desc: 'Generate all tests.'
            },
            {
                shorthand: '-d',
                flag: '--demo',
                desc: 'Generate Html test file.'
            },
            {
                flag: '--ts',
                desc: 'Generate typescript test file.'
            },
            {
                shorthand: '-r',
                flag: '--release',
                desc: 'Test generated node package.'
            },
            {
                shorthand: '-s',
                flag: '--silent',
                desc: 'Disable output log.'
            }
        ]
    },
    benchmark: {
        command: 'benchmark',
        desc: 'Generate benchmark files.',
        usage: ['benchmark <module-name>']
    },
    update: {
        command: 'update',
        desc: 'Update module info and documentation.',
        usage: ['update']
    },
    pack: {
        command: 'pack',
        desc: 'Transform files into commonjs modules.',
        usage: ['pack']
    }
};
