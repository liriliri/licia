/* Calculate the set of unique abbreviations for a given set of strings.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |names |List of names   |
 * |return|Abbreviation map|
 */

/* example
 * abbrev('lina', 'luna');
 * // -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function abbrev(
 *     ...names: string[]
 * ): { [abbreviation: string]: string };
 */

_('toArr');

exports = function() {
    const args = toArr(arguments);
    const names = args.sort(nameSort);

    const ret = {};
    const idleMap = {};

    for (let i = 0, len = names.length; i < len; i++) {
        const str = names[i];
        const nextStr = names[i + 1] || '';

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
