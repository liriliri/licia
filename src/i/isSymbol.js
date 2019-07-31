/* Check if value is a symbol.
 *
 * |Name  |Type   |Desc                     |
 * |------|-------|-------------------------|
 * |val   |*      |Value to check           |
 * |return|boolean|True if value is a symbol|
 */

/* example
 * isSymbol(Symbol('test')); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isSymbol(val: any): boolean;
 */

exports = function(val) {
    return typeof val === 'symbol';
};
