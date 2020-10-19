/* Check if value is a symbol.
 *
 * |Name  |Desc                     |
 * |------|-------------------------|
 * |val   |Value to check           |
 * |return|True if value is a symbol|
 */

/* example
 * isSymbol(Symbol('test')); // -> true
 */

/* module
 * env: all
 * since: 1.5.5
 */

/* typescript
 * export declare function isSymbol(val: any): boolean;
 */

exports = function(val) {
    return typeof val === 'symbol';
};
