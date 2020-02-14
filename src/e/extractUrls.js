/* Extract urls from plain text.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |str   |Text to extract|
 * |return|Url list       |
 */

/* example
 * const str = '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
 * extractUrls(str); // -> ['http://eustia.liriliri.io']
 */

/* module
 * env: all
 */

/* typescript
 * export declare function extractUrls(str: string): string[];
 */

_('unique trim map toArr');

exports = function(str) {
    const urlList = toArr(str.match(regUrl));

    return unique(
        map(urlList, function(url) {
            return trim(url);
        })
    );
};

const regUrl = /((https?)|(ftp)):\/\/[\w.]+[^ \f\n\r\t\v"\\<>[\]\u2100-\uFFFF(),]*/gi;
