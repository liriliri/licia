/* Check if value is a valid JSON.
 *
 * It uses `JSON.parse()` and a `try... catch` block.
 * 
 * |Name  |Type   |Desc                         |
 * |------|-------|-----------------------------|
 * |val   |string |JSON string                  |
 * |return|boolean|True if value is a valid JSON|
 * 
 * ```javascript
 * isJson('{"a": 5}'); // -> true
 * isJson("{'a': 5}"); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(val) 
{
    try 
    {
        JSON.parse(val);
        return true;
    } catch (e)
    {
        return false;
    }
}