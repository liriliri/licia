/* Use Buffer to emulate atob when running in node.
 *
 * ```javascript
 * atob('SGVsbG8gV29ybGQ='); // -> 'Hello World'
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('root isNode base64 map'); 

if (isNode) 
{
    exports = function (str) 
    {
        return new Buffer(str, 'base64').toString('binary');
    };
} else 
{
    if (root.atob) 
    {
        exports = root.atob;
    } else 
    {
        exports = function (str) 
        {
            return map(base64.decode(str), function (c) 
            {
                return String.fromCharCode(c);
            }).join('');
        };
    }
}
