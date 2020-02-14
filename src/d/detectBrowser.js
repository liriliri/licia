/* Detect browser info using ua.
 *
 * |Name                  |Desc                              |
 * |----------------------|----------------------------------|
 * |ua=navigator.userAgent|Browser userAgent                 |
 * |return                |Object containing name and version|
 *
 * Browsers supported: ie, chrome, edge, firefox, opera, safari, ios(mobile safari), android(android browser)
 */

/* example
 * const browser = detectBrowser();
 * if (browser.name === 'ie' && browser.version < 9) {
 *     // Do something about old IE...
 * }
 */

/* module
 * env: all
 */

/* typescript
 * export declare namespace detectBrowser {
 *     interface IBrowser {
 *         name: string;
 *         version: number;
 *     }
 * }
 * export declare function detectBrowser(ua?: string): detectBrowser.IBrowser;
 */

_('isBrowser toInt keys');

exports = function(ua) {
    ua = ua || (isBrowser ? navigator.userAgent : '');
    ua = ua.toLowerCase();

    const ieVer = getVer(ua, 'msie ');

    if (ieVer)
        return {
            version: ieVer,
            name: 'ie'
        };

    if (regIe11.test(ua))
        return {
            version: 11,
            name: 'ie'
        };

    for (let i = 0, len = browsers.length; i < len; i++) {
        const name = browsers[i];
        const match = ua.match(regBrowsers[name]);

        if (match == null) continue;

        let version = toInt(match[1].split('.')[0]);

        if (name === 'opera') version = getVer(ua, 'version/') || version;

        return {
            name: name,
            version: version
        };
    }

    return {
        name: 'unknown',
        version: -1
    };
};

const regBrowsers = {
    edge: /edge\/([0-9._]+)/,
    firefox: /firefox\/([0-9.]+)(?:\s|$)/,
    opera: /opera\/([0-9.]+)(?:\s|$)/,
    android: /android\s([0-9.]+)/,
    ios: /version\/([0-9._]+).*mobile.*safari.*/,
    safari: /version\/([0-9._]+).*safari/,
    chrome: /(?!chrom.*opr)chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/
};

const regIe11 = /trident\/7\./;
const browsers = keys(regBrowsers);

function getVer(ua, mark) {
    const idx = ua.indexOf(mark);

    if (idx > -1)
        return toInt(ua.substring(idx + mark.length, ua.indexOf('.', idx)));
}
