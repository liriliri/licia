/* Check if two urls pass the same origin policy.
 *
 * |Name  |Desc                                |
 * |------|------------------------------------|
 * |url1  |Url to check                        |
 * |url2  |Url to check                        |
 * |return|True if urls pass same origin policy|
 */

/* example
 * const url1 = 'http://example.com/a.html';
 * const url2 = 'http://example.com/b.html';
 * const url3 = 'http://licia.liriliri.io';
 * sameOrigin(url1, url2); // -> true
 * sameOrigin(url1, url3); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function sameOrigin(url1: string, url2: string): boolean;
 */

_('Url');

exports = function(url1, url2) {
    url1 = new Url(url1);
    url2 = new Url(url2);

    url1.port = url1.port | 0 || (url1.protocol === 'https' ? 443 : 80);
    url2.port = url2.port | 0 || (url2.protocol === 'https' ? 443 : 80);

    return (
        url1.protocol === url2.protocol &&
        url1.hostname === url2.hostname &&
        url1.port === url2.port
    );
};
