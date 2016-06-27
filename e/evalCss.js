/* Load css into page.
 *
 * |Name|Type  |Desc    |
 * |----|------|--------|
 * |css |string|Css code|
 *
 * ```javascript
 * evalCss('body{background:#08c}');
 * ```
 */

function exports(css)
{
    var style = document.createElement('style');
    style.textContent = css;
    style.type = 'text/css';
    document.head.appendChild(style);
}