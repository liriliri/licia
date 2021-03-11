/* Output cli help.
 *
 * |Name  |Desc     |
 * |------|---------|
 * |data  |Help data|
 * |return|Cli help |
 */

/* example
 * const test = {
 *     name: 'test',
 *     desc: 'Generate test files',
 *     usage: ['<module-name> [options]', 'lpad --browser'],
 *     options: [
 *         {
 *             name: 'browser',
 *             shorthand: 'b',
 *             desc: 'True if test should run in a browser'
 *         }
 *     ]
 * };
 * const data = {
 *     name: 'licia',
 *     usage: '<command> [options]',
 *     commands: [test]
 * };
 *
 * cliHelp(data);
 * cliHelp(test);
 */

/* module
 * env: node browser 
 * since: 1.27.0
 */

/* typescript
 * export declare namespace cliHelp {
 *     interface IOption {
 *         name: string;
 *         shorthand?: string;
 *         desc: string;
 *     }
 *     interface ICommand {
 *         name: string;
 *         desc: string;
 *         usage: string | string[];
 *         options?: IOption[];
 *     }
 *     interface IData {
 *         name: string;
 *         usage: string | string[];
 *         commands: ICommand[];
 *     }
 * }
 * export declare function cliHelp(data: cliHelp.IData | cliHelp.ICommand): string;
 */

_('template each map rpad ansiColor toArr cloneDeep strWidth max');

exports = function(data) {
    data = cloneDeep(data);
    data.usage = toArr(data.usage);

    if (data.commands) {
        const cmdNameWidths = map(data.commands, command =>
            strWidth(command.name)
        );
        data.maxNameWidth = max.apply(null, cmdNameWidths);

        return helpTpl(data);
    }

    each(data.options, option => {
        option.name =
            (option.shorthand ? '-' + option.shorthand + ', ' : '    ') +
            '--' +
            option.name;
    });
    const optNameWidths = map(data.options, option => strWidth(option.name));
    data.maxNameWidth = max.apply(null, optNameWidths);

    return cmdTpl(data);
};

const tplUtil = {
    each
};

tplUtil.rpad = (text, len) => rpad(text, len, ' ');

each(['yellow', 'green', 'cyan', 'red', 'white', 'magenta'], function(color) {
    tplUtil[color] = text => ansiColor[color](text);
});

const cmdTpl = template(
    [
        'Usage:',
        '',
        "<% util.each(usage, function (value) { %>  <%=util.cyan(name)%> <%=value%><%='\\n'%><% }); %>",
        '<% if (options) { %>Options:',
        '',
        "<%     util.each(options, function (option) { %>  <%=util.yellow(util.rpad(option.name, maxNameWidth))%> <%=option.desc%><%='\\n'%><% }); %>",
        '<% } %>Description:',
        '',
        '  <%=desc%>'
    ].join('\n'),
    tplUtil
);

const helpTpl = template(
    [
        'Usage:',
        '',
        "<% util.each(usage, function (value) { %>  <%=util.cyan(name)%> <%=value%><%='\\n'%><% }); %>",
        'Commands:',
        '',
        "<% util.each(commands, function (command) { %>  <%=util.yellow(util.rpad(command.name, maxNameWidth))%> <%=command.desc%><%='\\n'%><% }); %>",
        "Run '<%=util.cyan(name + ' help <command>')%>' for more information on a specific command"
    ].join('\n'),
    tplUtil
);
