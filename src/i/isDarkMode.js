/* Detect dark mode.
 */

/* example
 * console.log(isDarkMode()); // true if dark mode
 */

/* module
 * env: browser
 * since: 1.19.0
 */

/* typescript
 * export declare function isDarkMode(): boolean;
 */

_('MediaQuery');

const m = new MediaQuery('(prefers-color-scheme: dark)');

exports = () => m.isMatch();
