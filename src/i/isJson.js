/* Check if value is a valid JSON.
 *
 * It uses `JSON.parse()` and a `try... catch` block.
 *
 * |Name  |Type   |Desc                         |
 * |------|-------|-----------------------------|
 * |val   |string |JSON string                  |
 * |return|boolean|True if value is a valid JSON|
 */

/* example
 * isJson('{"a": 5}'); // -> true
 * isJson("{'a': 5}"); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isJson(val: string): boolean;
 */

exports = function(val) {
    try {
        JSON.parse(val);
        return true;
    } catch (e) {
        return false;
    }
};
