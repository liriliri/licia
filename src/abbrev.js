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
 * export declare function abbrev(...names: string[]): types.PlainObj<string>;
 */

_('types restArgs isSorted');

exports = restArgs(function(names) {
    names = names.sort(isSorted.defComparator);

    const ret = {};
    const idleMap = {};

    for (let i = 0, len = names.length; i < len; i++) {
        const str = names[i];
        const nextStr = names[i + 1] || '';

        if (str === nextStr) continue;

        let start = false;
        let abbrev = '';

        for (let j = 0, strLen = str.length; j < strLen; j++) {
            abbrev += str[j];

            if (!start && (str[j] !== nextStr[j] || j === strLen - 1)) {
                start = true;
            }

            if (!start) {
                idleMap[abbrev] = str;
            } else if (!ret[abbrev] && !idleMap[abbrev]) {
                ret[abbrev] = str;
            }
        }
    }

    return ret;
});
