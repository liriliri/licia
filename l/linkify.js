/* Hyperlink urls in a string.
 * 
 * |Name       |Type    |Desc                     |
 * |-----------|--------|-------------------------|
 * |str        |string  |String to hyperlink      |
 * |[hyperlink]|function|Function to hyperlink url|
 * |return     |string  |Result string            |
 * 
 * ```javascript
 * var str = 'Official site: http://eustia.liriliri.io'
 * linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
 * linkify(str, function (url) {
 *     return '<a href="' + url + '" target="_blank">' + url + '</a>';
 * });
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('extractUrls each escapeRegExp');

function exports(str, hyperlink) {
    hyperlink = hyperlink || defHyperlink;

    var urlList = extractUrls(str);

    each(urlList, function(url) {
        str = str.replace(new RegExp(escapeRegExp(url), 'g'), hyperlink);
    });

    return str;
}

function defHyperlink(url) {
    return '<a href="' + url + '">' + url + '</a>';
}
