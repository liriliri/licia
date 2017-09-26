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
 * ```
 */

_('extractUrls each escapeRegExp');

function exports(str, hyperlink) 
{
    var urlList = extractUrls(str),
        hyperlink = hyperlink || defHyperlink;

    each(urlList, function (url) 
    {
        str = str.replace(new RegExp(escapeRegExp(url), 'g'), hyperlink);
    });    

    return str;
}

function defHyperlink(url) 
{
    return '<a href="' + url + '">' + url + '</a>';
}