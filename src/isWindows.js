/* Check if platform is windows.
 */

/* example
 * console.log(isWindows); // -> true if running on windows
 */

/* module
 * env: node
 */

/* typescript
 * export declare const isWindows: boolean;
 */

exports = false;

if (typeof process !== 'undefined') {
    exports =
        process.platform === 'win32' ||
        process.env.OSTYPE === 'cygwin' ||
        process.env.OSTYPE === 'msys';
}
