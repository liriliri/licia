/* Simple fuzzy search.
 *
 * |Name     |Type  |Desc            |
 * |---------|------|----------------|
 * |needle   |string|String to search|
 * |haystacks|array |Search list     |
 * |options  |object|Search options  |
 *
 * Available options:
 *
 * |Name               |Type        |Desc                                        |
 * |-------------------|------------|--------------------------------------------|
 * |caseSensitive=false|boolean     |Whether comparisons should be case sensitive|
 * |[key]             |string array|Object key path if item is object            |
 */

/* example
 * fuzzySearch('lic', ['licia', 'll', 'lic']); // -> ['lic', 'licia']
 * fuzzySearch('alpha-test', [{
 *     name: 'alpha-test-1'
 * }, {
 *     name: 'beta-test'
 * }], {
 *     key: 'name'
 * }); // -> [{ name: 'alpha-test-1' }]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare namespace fuzzySearch {
 *     interface IOptions {
 *         caseSensitive?: boolean;
 *         key?: string | string[];
 *     }
 * }
 * export declare function fuzzySearch(
 *     needle: string,
 *     haystack: any[],
 *     options: fuzzySearch.IOptions
 * ): any[];
 */

_('filter map isStr safeGet levenshtein pluck');

exports = function(needle, haystacks, options = {}) {
    if (!options.caseSensitive) {
        needle = needle.toLowerCase();
    }

    haystacks = map(haystacks, haystack => {
        let string = toStr(haystack, options);

        if (!options.caseSensitive) {
            string = string.toLowerCase();
        }

        return {
            value: haystack,
            levenshtein: levenshtein(needle, string),
            string
        };
    });

    haystacks = filter(haystacks, haystack =>
        hasAllLetters(needle, haystack.string, options)
    );

    haystacks.sort((a, b) => a.levenshtein - b.levenshtein);

    return pluck(haystacks, 'value');
};

function toStr(haystack, options) {
    if (isStr(haystack)) return haystack;

    return safeGet(haystack, options.key) || '';
}

function hasAllLetters(needle, haystack) {
    const hLen = haystack.length;
    const nLen = needle.length;

    if (nLen > hLen) return false;
    if (nLen === hLen) return needle === haystack;

    for (let i = 0, j = 0; i < nLen; i++) {
        const c = needle.charCodeAt(i);
        let has = false;
        while (j < hLen) {
            if (haystack.charCodeAt(j++) === c) {
                has = true;
                break;
            }
        }
        if (!has) return false;
    }

    return true;
}
