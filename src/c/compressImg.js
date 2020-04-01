/* Compress image using canvas.
 *
 * |Name   |Desc             |
 * |-------|-----------------|
 * |file   |Image file or url|
 * |options|Options          |
 * |cb     |Callback         |
 *
 * Available options:
 *
 * |Name       |Desc                            |
 * |-----------|--------------------------------|
 * |maxWidth   |Max width                       |
 * |maxHeight  |Max height                      |
 * |width      |Output image width              |
 * |height     |Output image height             |
 * |mimeType   |Mime type                       |
 * |quality=0.8|Image quality, range from 0 to 1|
 *
 * In order to keep image ratio, height will be ignored when width is set.
 *
 * And maxWith, maxHeight will be ignored if width or height is set.
 */

/* example
 * const file = new Blob([]);
 * compressImg(file, {
 *     maxWidth: 200
 * }, function (err, file) {
 *     // ...
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function compressImg(
 *     file: File | Blob | string,
 *     cb: types.AnyFn
 * ): void;
 * export declare function compressImg(
 *     file: File | Blob | string,
 *     options?: {
 *         maxWidth?: number;
 *         maxHeight?: number;
 *         width?: number;
 *         height?: number;
 *         mimeType?: string;
 *         quality?: number;
 *     },
 *     cb?: types.AnyFn
 * ): void;
 */

_('isFn loadImg noop defaults createUrl isStr types');

exports = function(file, options, cb) {
    if (isFn(options)) {
        cb = options;
        options = {};
    }

    cb = cb || noop;
    options = options || {};
    defaults(options, defOptions);
    options.mimeType = options.mimeType || file.type;
    if (isStr(file)) {
        options.isUrl = true;
    } else {
        file = createUrl(file);
    }

    loadImg(file, function(err, img) {
        if (err) return cb(err);

        compress(img, options, cb);
    });
};

function compress(img, options, cb) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    let width = img.width;
    let height = img.height;
    const ratio = width / height;

    const maxWidth = options.maxWidth;
    const maxHeight = options.maxHeight;

    if (options.width || options.height) {
        if (options.width) {
            width = options.width;
            height = width / ratio;
        } else if (options.height) {
            height = options.height;
            width = height * ratio;
        }
    } else {
        if (width > maxWidth) {
            width = maxWidth;
            height = width / ratio;
        }

        if (height > maxHeight) {
            height = maxHeight;
            width = height * ratio;
        }
    }

    width = floor(width);
    height = floor(height);

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);
    if (URL && options.isUrl) URL.revokeObjectURL(img.src);
    if (canvas.toBlob) {
        try {
            canvas.toBlob(
                function(file) {
                    cb(null, file);
                },
                options.mimeType,
                options.quality
            );
        } catch (e) {
            cb(e);
        }
    } else {
        cb(new Error('Canvas toBlob is not supported'));
    }
}

const defOptions = {
    maxWidth: Infinity,
    maxHeight: Infinity,
    quality: 0.8
};

const floor = Math.floor;
