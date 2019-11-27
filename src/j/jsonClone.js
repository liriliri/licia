/* Use JSON parse and stringify to clone object.
 *
 * |Name  |Type|Desc          |
 * |------|----|--------------|
 * |val   |*   |Value to clone|
 * |return|*   |Cloned value  |
 */

/* example
 * jsonClone({ name: 'licia' }); // -> { name: 'licia' }
 */

/* module
 * env: all
 * since: 1.12.0
 */

/* typescript
 * export declare function jsonClone<T>(val: T): T;
 */

exports = val => JSON.parse(JSON.stringify(val));
