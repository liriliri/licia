/* Safe MutationObserver, does nothing if MutationObserver is not supported.
 * 
 * ```javascript
 * var observer = new MutationObserver(function (mutations) 
 * {
 *     // Do something.     
 * });
 * observer.observe(document.htmlElement);
 * observer.disconnect();
 * ```
 */

/* module
 * env: browser
 * test: browser
 */ 

_('Class');

exports = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

if (!exports) 
{
    exports = Class({
        initialize: function MutationObserver() {},
        observe: function () {},
        disconnect: function () {},
        takeRecords: function () {}
    });
}