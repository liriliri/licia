const stripAnsi = util.stripAnsi;
const stripIndent = util.stripIndent;

const test = {
    name: 'test',
    desc: 'Generate test files',
    usage: ['<module-name> [options]', 'lpad --browser'],
    options: [
        {
            name: 'browser',
            shorthand: 'b',
            desc: 'True if test should run in a browser'
        }
    ]
};
const data = {
    name: 'licia',
    usage: '<command> [options]',
    commands: [test]
};

expect(stripAnsi(cliHelp(data))).to.eql(stripIndent`
Usage:

  licia <command> [options]

Commands:

  test Generate test files

Run 'licia help <command>' for more information on a specific command
`);

expect(stripAnsi(cliHelp(test))).to.eql(stripIndent`
Usage:

  test <module-name> [options]
  test lpad --browser

Options:

  -b, --browser True if test should run in a browser

Description:

  Generate test files
`);
