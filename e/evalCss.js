/* Load css into page.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |css|string|Css code|
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