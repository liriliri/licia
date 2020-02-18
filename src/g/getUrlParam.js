/* Get url param.
 *
 * |Name        |Desc            |
 * |------------|----------------|
 * |name        |Param name      |
 * |url=location|Url to get param|
 * |return      |Param value     |
 */

/* example
 * getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function getUrlParam(name: string, url?:string): string | undefined;
 */

_('Url');

exports = function(name, url) {
    return new Url(url).query[name];
};
