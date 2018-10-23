/* Check if browser supports a given CSS feature.
 * 
 * |Name  |Type   |Desc              |
 * |------|-------|------------------|
 * |name  |string |Css property name |
 * |[val] |string |Css property value|
 * |return|boolean|True if supports  |
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
 * test: browser
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

var style = document.createElement('p').style;
