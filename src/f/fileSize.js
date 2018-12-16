/* Turn bytes into human readable file size.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |bytes |number|File bytes        |
 * |return|string|Readable file size|
 */

/* example
 * fileSize(5); // -> '5'
 * fileSize(1500); // -> '1.46K'
 * fileSize(1500000); // -> '1.43M'
 * fileSize(1500000000); // -> '1.4G'
 * fileSize(1500000000000); // -> '1.36T'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function fileSize(bytes: number): string;
 */

exports = function(bytes) {
    if (bytes <= 0) return '0';

    var suffixIdx = Math.floor(Math.log(bytes) / Math.log(1024)),
        val = bytes / Math.pow(2, suffixIdx * 10);

    return +val.toFixed(2) + suffixList[suffixIdx];
};

var suffixList = ['', 'K', 'M', 'G', 'T'];
