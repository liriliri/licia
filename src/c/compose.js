/* Compose a list of functions.
 *
 * Each function consumes the return value of the function that follows.
 *
 * |Name  |Desc                |
 * |------|--------------------|
 * |...fn |Functions to compose|
 * |return|Composed function   |
 */

/* example
 * const welcome = compose(function (name) {
 *     return 'hi: ' + name;
 * }, function (name) {
 *     return name.toUpperCase() + '!';
 * });
 *
 * welcome('licia'); // -> 'hi: LICIA!'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function compose(...fn: Function[]): Function;
 */

_('restArgs');

exports = restArgs(function(fnList) {
    return function() {
        let i = fnList.length - 1;

        let result = fnList[i].apply(this, arguments);
        while (i--) result = fnList[i].call(this, result);

        return result;
    };
});
