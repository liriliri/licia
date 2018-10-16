/* Alias of Object.prototype.toString.
 *
 * |Name  |Type  |Desc                                |
 * |------|------|------------------------------------|
 * |val   |*     |Source value                        |
 * |return|string|String representation of given value|
 * 
 * ```javascript
 * objToStr(5); // -> '[object Number]'
 * ```
 */

/* module
 * env: all
 * test: all
 */

var ObjToStr = Object.prototype.toString;

function exports(val) {
    return ObjToStr.call(val);
}
