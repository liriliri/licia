/* Turn bytes into human readable file size.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |bytes |File bytes        |
 * |return|Readable file size|
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
 */

/* typescript
 * export declare function fileSize(bytes: number): string;
 */

exports = function(bytes) {
    if (bytes <= 0) return '0';

    const suffixIdx = Math.floor(Math.log(bytes) / Math.log(1024));
    const val = bytes / Math.pow(2, suffixIdx * 10);

    return +val.toFixed(2) + suffixList[suffixIdx];
};

const suffixList = ['', 'K', 'M', 'G', 'T'];
