/* Check if platform is windows.
 * 
 * ```javascript
 * console.log(isWindows); // -> true if running on windows
 * ```
 */

/* module
 * env: node
 * test: node
 */ 

exports = false;

if (typeof process !== 'undefined') 
{
    exports = process.platform === 'win32' ||
              process.env.OSTYPE === 'cygwin' ||
              process.env.OSTYPE === 'msys';
}
