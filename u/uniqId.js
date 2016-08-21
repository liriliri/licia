/* Generate a globally-unique id.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |prefix|string|Id prefix         |
 * |return|string|Globally-unique id|
 *
 * ```javascript
 * uniqId('eusita_'); // -> 'eustia_xxx'
 * ```
 */

var idCounter = 0;

function exports(prefix)
{
    var id = ++idCounter + '';

    return prefix ? prefix + id : id;
}