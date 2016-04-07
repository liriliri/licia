/* function
 * evalCss: Load css into page.
 * css(string): Css code.
 *
 * ```javascript
 * evalCss('body{background:#08c}');
 * ```
 */

evalCss = function (css)
{
    var style = document.createElement('style');
    style.textContent = css;
    style.type = 'text/css';
    document.body.appendChild(style);
};