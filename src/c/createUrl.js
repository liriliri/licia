/* CreateObjectURL wrapper.
 *
 * |Name   |Desc                                |
 * |-------|------------------------------------|
 * |data   |Url data                            |
 * |options|Used when data is not a File or Blob|
 * |return |Blob url                            |
 */

/* example
 * createUrl('test', {type: 'text/plain'}); // -> Blob url
 * createUrl(['test', 'test']);
 * createUrl(new Blob([]));
 * createUrl(new File(['test'], 'test.txt'));
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function createUrl(
 *     data: any,
 *     options?: { type?: string }
 * ): string;
 */

_('defaults isBlob isFile Blob toArr');

exports = function(data, options) {
    options = options || {};
    defaults(options, defOpts);

    if (!isBlob(data) && !isFile(data)) {
        data = new Blob(toArr(data), options);
    }

    return URL.createObjectURL(data);
};

const defOpts = {
    type: 'text/plain'
};
