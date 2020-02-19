/* Detect file type using magic number.
 *
 * |Name  |Desc                          |
 * |------|------------------------------|
 * |input |File input                    |
 * |return|Object containing ext and mime|
 *
 * ### Supported file types
 *
 * jpg, png, gif, webp, bmp, gz, zip, rar, pdf, exe
 */

/* example
 * const fs = require('fs');
 * const file = fs.readFileSync('path/to/file');
 * console.log(fileType(file)); // -> { ext: 'jpg', mime: 'image/jpeg' }
 */

/* module
 * env: all
 * since: 1.5.1
 */

/* typescript
 * export declare function fileType(
 *     input: Buffer | ArrayBuffer | Uint8Array
 * ): {
 *     ext: string;
 *     mime: string;
 * } | undefined;
 */

_('type mime isFn');

exports = function(input) {
    if (type(input) !== 'uint8array') {
        input = new Uint8Array(input);
    }

    for (let i = 0, len = types.length; i < len; i++) {
        const type = types[i];
        const [ext, magic, offset] = type;
        if (isFn(magic)) {
            if (magic(input)) {
                return {
                    ext,
                    mime: mime(ext)
                };
            }
        } else if (check(input, magic, offset)) {
            return {
                ext,
                mime: mime(ext)
            };
        }
    }
};

const types = [
    ['jpg', [0xff, 0xd8, 0xff]],
    ['png', [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]],
    ['gif', [0x47, 0x49, 0x46]],
    ['webp', [0x57, 0x45, 0x42, 0x50], 8],
    ['bmp', [0x42, 0x4d]],
    ['gz', [0x1f, 0x8b, 0x8]],
    [
        'zip',
        input => {
            return (
                check(input, [0x50, 0x4b]) &&
                (input[2] === 0x3 || input[2] === 0x5 || input[2] === 0x7) &&
                (input[3] === 0x4 || input[3] === 0x6 || input[3] === 0x8)
            );
        }
    ],
    [
        'rar',
        input => {
            return (
                check(input, [0x52, 0x61, 0x72, 0x21, 0x1a, 0x7]) &&
                (input[6] === 0x0 || input[6] === 0x1)
            );
        }
    ],
    ['pdf', [0x25, 0x50, 0x44, 0x46]],
    ['exe', [0x4d, 0x5a]]
];

function check(input, magic, offset = 0) {
    for (let i = 0, len = magic.length; i < len; i++) {
        if (input[offset + i] !== magic[i]) {
            return false;
        }
    }

    return true;
}
