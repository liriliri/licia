/* Generate a globally-unique id.
 *
 * |Name  |Type  |Desc              |
 * |--------------------------------|
 * |prefix|string|Id prefix         |
 * |return|string|Globally-unique id|
 *
 * ```javascript
 * uniqueId('eusita_'); // -> eustia_xxx
 * ```
 */

var idCounter = 0;

exports = function (prefix)
{
    var id = ++idCounter + '';

    return prefix ? prefix + id : id;
};