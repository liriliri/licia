/* Extract urls from plain text.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |str   |string|Text to extract|
 * |return|array |Url list       |
 * 
 * ```javascript
 * var str = '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
 * extractUrl(str); // -> ['http://eustia.liriliri.io']
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('unique trim map toArr'); 

function exports(str) 
{
    var urlList = toArr(str.match(regUrl));

    return unique(map(urlList, function (url) 
    {
        return trim(url);
    }));
}

var regUrl = /((https?)|(ftp)):\/\/[\w.]+[^ \f\n\r\t\v"\\<>[\]\u2100-\uFFFF(),]*/ig;