/* Turn bytes into human readable file size.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |bytes |File bytes        |
 * |return|Readable file size|
 *
 * Turn human readable file size into bytes.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |size  |Readable file size|
 * |return|File bytes        |
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
 * export declare function fileSize(size: string): number;
 */

_('isStr toNum');

exports = function(bytes) {
    if (isStr(bytes)) {
        const match = bytes.match(regStrSize);

        if (!match) return 0;

        return Math.round(toNum(match[1]) * factor[match[2] || 'B']);
    } else {
        if (bytes <= 0) return '0';

        const suffixIdx = Math.floor(Math.log(bytes) / Math.log(1024));
        const val = bytes / Math.pow(2, suffixIdx * 10);

        return +val.toFixed(2) + suffixList[suffixIdx];
    }
};

const factor = {
    B: 1,
    K: 1024
};
factor.M = factor.K * 1024;
factor.G = factor.M * 1024;
factor.T = factor.G * 1024;

const suffixList = ['', 'K', 'M', 'G', 'T'];

const regStrSize = /^(\d+(?:\.\d+)?) *(K|M|G|T)?$/;
