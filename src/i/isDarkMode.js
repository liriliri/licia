/* Detect dark mode.
 */

/* example
 * console.log(isDarkMode()); // true if dark mode
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function isDarkMode(): boolean;
 */

_('MediaQuery');

const m = new MediaQuery('(prefers-color-scheme: dark)');

exports = () => m.isMatch();
