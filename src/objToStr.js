/* Alias of Object.prototype.toString.
 *
 * |Name  |Desc                                |
 * |------|------------------------------------|
 * |val   |Source value                        |
 * |return|String representation of given value|
 */

/* example
 * objToStr(5); // -> '[object Number]'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function objToStr(val: any): string;
 */

const ObjToStr = Object.prototype.toString;

exports = function(val) {
    return ObjToStr.call(val);
};
