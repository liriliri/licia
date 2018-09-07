/* Detect operating system using ua.
 * 
 * |Name                    |Type  |Desc                 |
 * |------------------------|------|---------------------|
 * |[ua=navigator.userAgent]|string|Browser userAgent    |
 * |return                  |string|Operating system name|
 * 
 * Supported os: windows, os x, linux, ios, android, windows phone
 * 
 * ```javascript
 * if (detectOs() === 'ios') 
 * {
 *     // Do something about ios...
 * }
 * ```
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function detectOs(ua?: string): string
 */

_('isBrowser');

function exports(ua) {
    ua = ua || (isBrowser ? navigator.userAgent : '');

    ua = ua.toLowerCase();

    if (detect('windows phone')) return 'windows phone';
    if (detect('win')) return 'windows';
    if (detect('android')) return 'android';
    if (detect('ipad') || detect('iphone') || detect('ipod')) return 'ios';
    if (detect('mac')) return 'os x';
    if (detect('linux')) return 'linux';

    function detect(keyword) {
        return ua.indexOf(keyword) > -1;
    }

    return 'unknown';
}
