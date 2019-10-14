/* Ini parser and serializer.
 *
 * ### parse
 *
 * Parse ini string into js object.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |ini   |string|Ini string      |
 * |return|object|Parsed js object|
 *
 * ### stringify
 *
 * Stringify object into an ini formatted string.
 *
 * |Name   |Type  |Desc                |
 * |------ |------|--------------------|
 * |obj    |*     |Object to stringify |
 * |options|object|Stringify options   |
 * |return |string|Ini formatted string|
 *
 * Options:
 *
 * |Name            |Type   |Desc               |
 * |----------------|-------|-------------------|
 * |[section]       |string |Top section        |
 * |whitespace=false|boolean|Whitespace around =|
 */

/* example
 * const config = ini.parse(`
 * ; This is a comment
 * library = licia
 *
 * [user.info]
 * name = surunzi
 * alias[] = redhoodsu
 * alias[] = red
 * `); // -> {library: 'licia', user: {info: {name: 'surunzi', alias: ['redhoodsu', 'red']}}}
 *
 * ini.stringify(config);
 */

/* module
 * env: all
 * test: all
 * since: 1.5.4
 */

/* typescript
 * export declare namespace ini {
 *     interface IOptions {
 *         section?: string;
 *         whitespace: boolean;
 *     }
 * }
 * export declare const ini: {
 *     parse(ini: string): any;
 *     stringify(obj: any, options?: ini.IOptions): string;
 * };
 */

_('each trim safeSet safeGet endWith isArr isObj');

// https://github.com/npm/ini
const regSection = /^\[([^\]]*)\]$/i;
const regKeyVal = /^([^=]+)(=(.*))?$/i;
const regComment = /^\s*[;#]/;

function parse(ini) {
    const ret = {};
    let section = ret;

    each(ini.split('\n'), line => {
        line = trim(line);
        if (!line || line.match(regComment)) return;

        let match = line.match(regSection);
        if (match && match[1]) {
            const key = match[1];
            section = safeGet(ret, key) || {};
            return safeSet(ret, key, section);
        }

        match = line.match(regKeyVal);
        if (!match) return;

        let key = trim(match[1]);
        let val = match[2] ? trim(match[3]) : true;
        if (val === 'true') val = true;
        if (val === 'false') val = false;
        if (val === 'null') val = null;

        if (endWith(key, '[]')) {
            key = key.substring(0, key.length - 2);
            if (!section[key]) section[key] = [];
        }

        isArr(section[key]) ? section[key].push(val) : (section[key] = val);
    });

    return ret;
}

function stringify(obj, options = {}) {
    let ret = '';

    let { section } = options;
    const { whitespace } = options;
    const separator = whitespace ? ' = ' : '=';
    const children = [];

    each(obj, (val, key) => {
        if (isArr(val)) {
            each(val, item => {
                ret += `${key}[]${separator}${item}\n`;
            });
        } else if (isObj(val)) {
            children.push({ key, val });
        } else {
            ret += `${key}${separator}${val}\n`;
        }
    });

    if (section && ret) {
        ret = `[${section}]\n` + ret;
    }

    section = section ? section + '.' : '';
    each(children, child => {
        child = stringify(child.val, {
            section: section + child.key,
            whitespace: options.whitespace
        });
        if (child) {
            if (ret) {
                ret += '\n';
            }
            ret += child;
        }
    });

    return ret;
}

exports = {
    parse,
    stringify
};
