/* Check if platform is windows.
 */

/* example
 * console.log(isWindows); // -> true if running on windows
 */

/* module
 * env: all
 */

/* typescript
 * export declare const isWindows: boolean;
 */

_('detectOs');

exports = detectOs() === 'windows';
