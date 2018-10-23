/* Check if value is an Null.
 *
 * |Name  |Type   |Desc                    |
 * |------|-------|------------------------|
 * |val   |*      |Value to check          |
 * |return|boolean|True if value is an Null|
 */

/* example
 * isNull(null); // -> true
 */

/* module
 * env: all
 * test: all
 */

exports = function(val) {
    return val === null;
};
