/* Open file dialog to select file in browser.
 *
 * |Name   |Desc          |
 * |-------|--------------|
 * |options|Dialog options|
 * |return |Files promise |
 *
 * Available options:
 *
 * |Name          |Desc                        |
 * |--------------|----------------------------|
 * |accept        |File types                  |
 * |multiple=false|Select multiple files or not|
 */

/* example
 * openFile({ multiple: true }).then(fileList => {
 *     console.log(fileList);
 * });
 */

/* module
 * env: browser
 * since: 1.3.0
 */

/* typescript
 * export declare function openFile(options?: {
 *     accept?: string;
 *     multiple?: boolean;
 * }): Promise<File[]>;
 */

exports = function(options = {}) {
    return new Promise(resolve => {
        const input = document.createElement('input');

        input.style.position = 'fixed';
        input.style.bottom = '0';
        input.style.left = '0';
        input.style.visibility = 'hidden';
        input.setAttribute('type', 'file');
        if (options.accept) {
            input.setAttribute('accept', options.accept);
        }
        if (options.multiple) {
            input.setAttribute('multiple', '');
        }
        document.body.appendChild(input);

        input.addEventListener('change', () => {
            document.body.removeChild(input);
            resolve(input.files);
        });

        input.click();
    });
};
