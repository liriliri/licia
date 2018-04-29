/* Compose a list of functions.
 *
 * Each function consumes the return value of the function that follows.
 * 
 * |Name  |Type    |Desc                |
 * |------|--------|--------------------|
 * |...fn |function|Functions to compose|
 * |return|function|Composed function   |
 * 
 * ```javascript
 * var welcome = compose(function (name) 
 * {
 *     return 'hi: ' + name;
 * }, function (name) 
 * {
 *     return name.toUpperCase() + '!';
 * });
 * 
 * welcome('licia'); // -> 'hi: LICIA!'
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('restArgs');

exports = restArgs(function (fnList) 
{
    return function () 
    {
        var i = fnList.length - 1;

        var result = fnList[i].apply(this, arguments);
        while (i--) result = fnList[i].call(this, result);

        return result;
    };
}); 
