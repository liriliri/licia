/* Normalize http header name.
 *
 * |Name  |Type  |Desc               |
 * |------|------|-------------------|
 * |header|string|Header to normalize|
 * |return|string|Normalized header  |
 */

/* example
 * normalizeHeader('content-type'); // -> 'Content-Type'
 * normalizeHeader('etag'); // -> 'ETag'
 */

/* module
 * env: all
 * test: all
 * since: 1.2.0
 */

/* typescript
 * export declare function normalizeHeader(header: string): string;
 */

_('map capitalize');

exports = function(header) {
    let ret = specialHeaders[header.toLowerCase()];

    if (!ret) {
        ret = map(header.split('-'), capitalize).join('-');
    }

    return ret;
};

const specialHeaders = {
    'content-md5': 'Content-MD5',
    dnt: 'DNT',
    etag: 'ETag',
    'last-event-id': 'Last-Event-ID',
    tcn: 'TCN',
    te: 'TE',
    'www-authenticate': 'WWW-Authenticate',
    'x-dnsprefetch-control': 'X-DNSPrefetch-Control'
};
