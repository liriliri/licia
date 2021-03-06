/* Sort strings in natural order.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |arr   |Array of strings|
 * |return|Sorted array    |
 */

/* example
 * naturalSort(['img12', 'img11', '$img', '_img', '1', '2', '12']);
 * // -> ['1', '2', '12', '$img', 'img11', 'img12', '_img']
 */

/* module
 * env: all
 */

/* typescript
 * export declare function naturalSort(arr: string[]): string[];
 */

_('startWith root');

exports = function(arr) {
    return arr.sort(naturalOrderComparator);
};

// https://github.com/ChromeDevTools/devtools-frontend
function naturalOrderComparator(a, b) {
    if (startWith(a, '_') && !startWith(b, '_')) {
        return 1;
    }
    if (startWith(b, '_') && !startWith(a, '_')) {
        return -1;
    }

    const chunk = /^\d+|^\D+/;
    let chunka, chunkb, anum, bnum;
    /* eslint-disable no-constant-condition */
    while (true) {
        if (a) {
            if (!b) {
                return 1;
            }
        } else {
            if (b) {
                return -1;
            }
            return 0;
        }
        chunka = a.match(chunk)[0];
        chunkb = b.match(chunk)[0];
        anum = !root.isNaN(chunka);
        bnum = !root.isNaN(chunkb);
        if (anum && !bnum) {
            return -1;
        }
        if (bnum && !anum) {
            return 1;
        }
        if (anum && bnum) {
            const diff = chunka - chunkb;
            if (diff) {
                return diff;
            }
            if (chunka.length !== chunkb.length) {
                if (!+chunka && !+chunkb) {
                    return chunka.length - chunkb.length;
                }
                return chunkb.length - chunka.length;
            }
        } else if (chunka !== chunkb) {
            return chunka < chunkb ? -1 : 1;
        }
        a = a.substring(chunka.length);
        b = b.substring(chunkb.length);
    }
}
