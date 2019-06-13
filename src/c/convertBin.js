/* Convert binary data type.
 *
 * |Name  |Type  |Desc                  |
 * |------|------|----------------------|
 * |bin   |*     |Binary data to convert|
 * |type  |string|Binary type           |
 * |return|*     |Target binary         |
 *
 * ### Supported binary type
 *
 * base64, ArrayBuffer, Array, Uint8Array, Blob(browser), Buffer(node)
 *
 * You can not convert Blob to other types directly since it's an asynchronous process.
 *
 * ### blobToArrBuffer
 *
 * Convert Blob to ArrayBuffer.
 *
 * |Name  |Type   |Desc               |
 * |------|-------|-------------------|
 * |blob  |Blob   |Blob to convert    |
 * |return|Promise|ArrayBuffer promise|
 */

/* example
 * convertBin('qK6b/w==', 'Uint8Array'); // -> [168, 174, 155, 255]
 * convertBin.blobToArrBuffer(new Blob[]).then(arrBuffer => {
 *     // Do something...
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare namespace convertBin {
 *     function blobToArrBuffer(blob: any): ArrayBuffer;
 * }
 * export declare function convertBin(bin: any, type: string): any;
 */

_('isStr base64 isArrBuffer isArr isBuffer type lowerCase');

function exports(bin, t) {
    let result;
    t = lowerCase(t);

    if (isStr(bin)) {
        result = new Uint8Array(base64.decode(bin));
    } else if (isArrBuffer(bin)) {
        bin = bin.slice(0);
        result = new Uint8Array(bin);
    } else if (isArr(bin)) {
        result = new Uint8Array(bin);
    } else if (type(bin) === 'uint8array') {
        result = bin.slice(0);
    } else if (isBuffer(bin)) {
        result = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) {
            result[i] = bin[i];
        }
    }

    if (result) {
        switch (t) {
            case 'base64':
                result = base64.encode(result);
                break;
            case 'arraybuffer':
                result = result.buffer;
                break;
            case 'array':
                result = [].slice.call(result);
                break;
            case 'buffer':
                result = Buffer.from(result);
                break;
            case 'blob':
                result = new Blob([result.buffer]);
                break;
        }
    }

    return result;
}

exports.blobToArrBuffer = function(blob) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = function(e) {
            resolve(e.target.result);
        };
        fileReader.onerror = function(err) {
            reject(err);
        };
        fileReader.readAsArrayBuffer(blob);
    });
};
