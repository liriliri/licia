/* Calculate the set of unique abbreviations for a given set of strings.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |...arr|string|List of names   |
 * |return|object|Abbreviation map|
 */

/* example
 * abbrev('lina', 'luna');
 * // -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function abbrev(
 *     ...arr: string[]
 * ): { [abbreviation: string]: string };
 */

_('toArr');

exports = function() {
    let args = toArr(arguments);
    args = args.sort(nameSort);

    const ret = {};
    const idleMap = {};

    for (let i = 0, len = args.length; i < len; i++) {
        const str = args[i];
        const nextStr = args[i + 1] || '';

        if (str === nextStr) continue;

        let start = false,
            abbrev = '';

        for (let j = 0, strLen = str.length; j < strLen; j++) {
            abbrev += str[j];

            if (!start && (str[j] !== nextStr[j] || j === strLen - 1))
                start = true;

            if (!start) {
                idleMap[abbrev] = str;
            } else if (!ret[abbrev] && !idleMap[abbrev]) {
                ret[abbrev] = str;
            }
        }
    }

    return ret;
};

function nameSort(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
