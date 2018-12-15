/* Fetch a given url.
 *
 * |Name  |Type   |Desc           |
 * |------|-------|---------------|
 * |url   |string |Url to prefetch|
 * |return|Promise|A Promise      |
 * 
 * It uses `<link rel=prefetch>` if possible.
 */

/* example
 * prefetch('https://eustia.liriliri.io/');
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function prefetch(url: string): Promise<void>;
 */

function prefetchByLink(url) {
    return new Promise((resolve, reject) => {
        const link = document.createElement(`link`);
        link.rel = `prefetch`;
        link.href = url;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
}

function prefetchByXhr(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(`GET`, url, (req.withCredentials = true));
        req.onload = () => {
            req.status === 200 ? resolve() : reject();
        };
        req.send();
    });
}

const link = document.createElement('link');
const supportLink =
    (link.relList || {}).supports && link.relList.supports('prefetch');
exports = supportLink ? prefetchByLink : prefetchByXhr;
