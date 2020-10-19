/* Parse command line argument options, the same as minimist.
 *
 * |Name   |Desc           |
 * |-------|---------------|
 * |args   |Argument array |
 * |options|Parse options  |
 * |return |Parsed result  |
 *
 * ### options
 *
 * |Name      |Desc             |
 * |----------|-----------------|
 * |names     |option names     |
 * |shorthands|option shorthands|
 */

/* example
 * parseArgs(['eustia', '--output', 'util.js', '-w'], {
 *     names: {
 *         output: 'string',
 *         watch: 'boolean'
 *     },
 *     shorthands: {
 *         output: 'o',
 *         watch: 'w'
 *     }
 * });
 * // -> {remain: ['eustia'], output: 'util.js', watch: true}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function parseArgs(
 *     args: string[],
 *     options: {
 *         names: any;
 *         shorthands: any;
 *     }
 * ): any;
 */

_('defaults toNum invert toBool');

exports = function(args, opts) {
    opts = opts || {};
    defaults(opts, defOpts);
    const names = opts.names;
    const shorthands = invert(opts.shorthands);

    const remain = [];
    const ret = { remain: remain };
    let name;
    let type;

    for (let i = 0, len = args.length; i < len; i++) {
        const arg = args[i];
        const nextArg = args[i + 1];

        let match = arg.match(regDoubleDash);

        if (match) {
            name = match[1];
            type = names[name];
            if (!type) {
                remain.push(arg);
            } else if (nextArg && !regDashStart.test(nextArg)) {
                setArg(name, nextArg);
                i++;
            } else if (type === 'boolean') {
                setArg(name, true);
                i++;
            }
            continue;
        }

        match = arg.match(regSingleDash);

        if (match) {
            const letters = match[1];

            for (let j = 0; j < letters.length; j++) {
                const letter = letters[j];

                name = shorthands[letter];
                if (!name) continue;

                type = names[name];
                if (type === 'boolean') setArg(shorthands[letter], true);
            }

            continue;
        }

        remain.push(arg);
    }

    function setArg(name, val) {
        const type = names[name];

        switch (type) {
            case 'number':
                val = toNum(val);
                break;
            case 'boolean':
                val = toBool(val);
                break;
            default:
                break;
        }

        ret[name] = val;
    }

    return ret;
};

const defOpts = {
    names: {},
    shorthands: {}
};

const regDoubleDash = /^--(.+)/;
const regSingleDash = /^-([^-]+)/;
const regDashStart = /^-/;
