/* Parse command line argument options, the same as minimist.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |args  |array |Argument array |
 * |opts  |object|Parse options  |
 * |return|object|Parsed result  |
 * 
 * ### options
 * 
 * |Name      |Type  |Desc             |
 * |----------|------|-----------------|
 * |names     |object|option names     |
 * |shorthands|object|option shorthands|
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
 * test: all
 */

_('defaults toNum invert toBool');

exports = function(args, opts) {
    opts = opts || {};
    defaults(opts, defOpts);
    var names = opts.names,
        shorthands = invert(opts.shorthands);

    var remain = [],
        ret = { remain: remain },
        name,
        type;

    for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i],
            nextArg = args[i + 1];

        var match;

        match = arg.match(regDoubleDash);

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
            var letters = match[1];

            for (var j = 0; j < letters.length; j++) {
                var letter = letters[j];

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
        var type = names[name];

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

var defOpts = {
    names: {},
    shorthands: {}
};

var regDoubleDash = /^--(.+)/,
    regSingleDash = /^-([^-]+)/,
    regDashStart = /^-/;
