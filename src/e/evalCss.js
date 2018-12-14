/* Load css into page.
 *
 * |Name|Type  |Desc    |
 * |----|------|--------|
 * |css |string|Css code|
 */

/* example
 * evalCss('body{background:#08c}');
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function evalCss(css: string): void;
 */

exports = function(css) {
    var style = document.createElement('style');
    style.textContent = css;
    style.type = 'text/css';
    document.head.appendChild(style);
};
