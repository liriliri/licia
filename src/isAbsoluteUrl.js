/* Check if an url is absolute.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |url   |Url to check           |
 * |return|True if url is absolute|
 */

/* example
 * isAbsoluteUrl('http://www.surunzi.com'); // -> true
 * isAbsoluteUrl('//www.surunzi.com'); // -> false
 * isAbsoluteUrl('surunzi.com'); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isAbsoluteUrl(url: string): boolean;
 */

exports = function(url) {
    return regAbsolute.test(url);
};

const regAbsolute = /^[a-z][a-z0-9+.-]*:/;
