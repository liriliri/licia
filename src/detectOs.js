/* Detect operating system using ua.
 *
 * |Name                  |Desc                 |
 * |----------------------|---------------------|
 * |ua=navigator.userAgent|Browser userAgent    |
 * |return                |Operating system name|
 *
 * Supported os: windows, os x, linux, ios, android, windows phone
 */

/* example
 * if (detectOs() === 'ios') {
 *     // Do something about ios...
 * }
 */

/* module
 * env: all
 */

/* typescript
 * export declare function detectOs(ua?: string): string;
 */

_('isBrowser isNode');

exports = function(ua) {
    if (!ua && isBrowser) {
        ua = navigator.userAgent;
    }

    function detect(keyword) {
        return ua.indexOf(keyword) > -1;
    }

    if (ua) {
        ua = ua.toLowerCase();

        if (detect('windows phone')) return 'windows phone';
        if (detect('win')) return 'windows';
        if (detect('android')) return 'android';
        if (detect('ipad') || detect('iphone') || detect('ipod')) return 'ios';
        if (detect('mac')) return 'os x';
        if (detect('linux')) return 'linux';
    } else if (isNode) {
        const { platform, env } = process;

        if (
            platform === 'win32' ||
            env.OSTYPE === 'cygwin' ||
            env.OSTYPE === 'msys'
        ) {
            return 'windows';
        }

        if (platform === 'darwin') {
            return 'os x';
        }

        if (platform === 'linux') {
            return 'linux';
        }
    }

    return 'unknown';
};
