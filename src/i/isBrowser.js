/* Check if running in a browser.
 */

/* example
 * console.log(isBrowser); // -> true if running in a browser
 */

/* module
 * env: all
 */

/* typescript
 * export declare const isBrowser: boolean;
 */

exports =
    typeof window === 'object' &&
    typeof document === 'object' &&
    document.nodeType === 9;
