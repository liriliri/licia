/* Trigger a file download on client side.
 *
 * |Name           |Desc            |
 * |---------------|----------------|
 * |data           |Data to download|
 * |name           |File name       |
 * |type=text/plain|Data type       |
 */

/* example
 * download('test', 'test.txt');
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function download(
 *     data: Blob | File | string | any[],
 *     name: string,
 *     type?: string
 * ): void;
 */

_('createUrl');

exports = function(data, name, type) {
    type = type || 'text/plain';

    const el = document.createElement('a');
    el.setAttribute('href', createUrl(data, { type: type }));
    el.setAttribute('download', name);
    el.addEventListener('click', function(e) {
        e.stopImmediatePropagation();
    });

    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
};
