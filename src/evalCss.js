/* Load css into page.
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |css   |Css code     |
 * |return|Style element|
 */

/* example
 * evalCss('body{background:#08c}');
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function evalCss(css: string): HTMLStyleElement;
 */

exports = function(css) {
    const style = document.createElement('style');
    style.textContent = css;
    style.type = 'text/css';
    document.head.appendChild(style);
    return style;
};
