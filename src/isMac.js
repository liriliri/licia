/* Check if platform is mac.
 */

/* example
 * console.log(isMac); // -> true if running on mac
 */

/* module
 * env: all
 */

/* typescript
 * export declare const isMac: boolean;
 */

_('detectOs');

exports = detectOs() === 'os x';
