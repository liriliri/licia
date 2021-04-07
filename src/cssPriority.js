/* Calculate and compare priority of css selector/rule.
 *
 * |Name    |Type           |
 * |--------|---------------|
 * |selector|CSS selector   |
 * |options |Rule extra info|
 * |return  |Priority array |
 *
 * Priority array contains five number values.
 *
 * 1. Important mark
 * 2. Inline style
 * 3. ID selector
 * 4. Class selectors
 * 5. Type selectors
 * 6. Rule position
 *
 * ### compare
 *
 * Compare priorities.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |p1    |Priority to compare|
 * |p2    |Priority to compare|
 * |return|Comparison result  |
 */

/* example
 * cssPriority('a.button > i.icon:before', {
 *     important: true,
 *     inlineStyle: false,
 *     position: 100
 * }); // -> [1, 0, 0, 2, 3, 100]
 */

/* module
 * env: all
 * since: 1.29.0
 */

/* typescript
 * export declare namespace cssPriority {
 *     function compare(p1: number[], p2: number[]): number;
 * }
 * export declare function cssPriority(
 *     selector: string,
 *     options?: {
 *         important?: boolean;
 *         inlineStyle?: boolean;
 *         position?: number;
 *     }
 * ): number[];
 */

_('selector each startWith contain cmpVersion');

// https://github.com/yibn2008/css-priority
exports = function(
    sel,
    { important = false, inlineStyle = false, position = 0 } = {}
) {
    const ret = [0, 0, 0, 0, 0, position];
    if (important) ret[0] = 1;
    if (inlineStyle) ret[1] = 1;

    const group = selector.parse(sel)[0];

    each(group, ({ type, value }) => {
        switch (type) {
            case 'id':
                ret[2]++;
                break;
            case 'class':
            case 'attribute':
                ret[3]++;
                break;
            case 'pseudo':
                if (contain(PSEUDO_ELEMS, value.replace(/:/g, ''))) {
                    ret[4]++;
                } else if (!startWith(value, '::')) {
                    ret[3]++;
                }
                break;
            case 'tag':
                if (value !== '*') {
                    ret[4]++;
                }
                break;
        }
    });

    return ret;
};

const PSEUDO_ELEMS = [
    'first-letter',
    'last-letter',
    'first-line',
    'last-line',
    'first-child',
    'last-child',
    'before',
    'after'
];

exports.compare = function(p1, p2) {
    return cmpVersion(p1.join('.'), p2.join('.'));
};
