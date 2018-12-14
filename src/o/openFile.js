/* Open file dialog to select file in browser.
 * 
 * |Name   |Type   |Desc          |
 * |-------|-------|--------------|
 * |options|object |Dialog options|
 * |return |Promise|Files promise |
 * 
 * Available options:
 * 
 * |Name          |Type   |Desc                        |
 * |--------------|-------|----------------------------|
 * |accept        |string |File types                  |
 * |multiple=false|boolean|Select multiple files or not|
 */

/* example
 * openFile({multiple: true}).then(fileList => {
 *     console.log(fileList)   
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare namespace openFile {
 *     interface IOptions {
 *         accept?: string;   
 *         multiple?: boolean;
 *     }
 * }
 *
 * export declare function openFile(options?: openFile.IOptions): Promise<File[]>;
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
