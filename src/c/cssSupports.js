/* Check if browser supports a given CSS feature.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |name  |Css property name |
 * |val   |Css property value|
 * |return|True if supports  |
 */

/* example
 * cssSupports('display', 'flex'); // -> true
 * cssSupports('display', 'invalid'); // -> false
 * cssSupports('text-decoration-line', 'underline'); // -> true
 * cssSupports('grid'); // -> true
 * cssSupports('invalid'); // -> false
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function cssSupports(name: string, val?: string): boolean;
 */

_('memoize isUndef camelCase');

exports = memoize(
    function(name, value) {
        if (isUndef(value)) {
            name = camelCase(name);
            return !isUndef(style[name]);
        }

        style.cssText = '';
        style.cssText = name + ':' + value;
        return !!style.length;
    },
    function(name, value) {
        return name + ' ' + value;
    }
);

const style = document.createElement('p').style;
