/* Check if running in a browser.
 *
 * ```javascript
 * console.log(isBrowser); // -> true if running in a browser
 * ```
 */

exports = typeof window === 'object' &&
          typeof document === 'object' &&
          document.nodeType === 9;