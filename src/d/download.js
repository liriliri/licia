/* Trigger a file download on client side.
 *
 * |Name           |Type                  |Desc            |
 * |---------------|----------------------|----------------|
 * |data           |Blob File string array|Data to download|
 * |name           |string                |File name       |
 * |type=text/plain|string                |Data type       |
 */

/* example
 * download('test', 'test.txt');
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function download(data: Blob | File | string | any[], name: string, type?: string);declare function download(
 *     data: Blob | File | string | any[],
 *     name: string,
 *     type?: string
 * );
 */

_('createUrl');

exports = function(data, name, type) {
    type = type || 'text/plain';

    var el = document.createElement('a');
    el.setAttribute('href', createUrl(data, { type: type }));
    el.setAttribute('download', name);
    el.addEventListener('click', function(e) {
        e.stopImmediatePropagation();
    });

    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
};
