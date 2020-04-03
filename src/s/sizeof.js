/* Get approximate size of a js object.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |obj   |Object to calculate|
 * |return|Size in bytes      |
 *
 * A char of string is counted as 2 bytes. And 4 bytes for boolean, 8 bytes for number.
 *
 * Object keys are treated as strings.
 */

/* example
 * sizeof('a'); // -> 2
 * sizeof(8); // -> 8
 * sizeof(false); // -> 4
 * sizeof(function() {}); // -> 0
 * sizeof({ a: 'b' }); // -> 4
 */

/* module
 * env: all
 * since: 1.14.0
 */

/* typescript
 * export declare function sizeof(obj: any): number;
 */

_('isArr keys isBuffer isNull');

// https://stackoverflow.com/questions/4905861/memory-usage-of-different-data-types-in-javascript
const strSize = 2;
const boolSize = 4;
const numSize = 8;

exports = function(obj) {
    return sizeof(obj, {
        values: []
    });
};

function sizeof(obj, { values }) {
    const t = typeof obj;

    if (t === 'string') return obj.length * strSize;
    if (t === 'number') return numSize;
    if (t === 'boolean') return boolSize;

    let size = 0;

    if (t === 'object' && !isNull(obj)) {
        if (values.indexOf(obj) > -1) {
            return 0;
        }
        values.push(obj);

        if (isArr(obj)) {
            for (let i = 0, len = obj.length; i < len; i++) {
                size += sizeof(obj[i], { values });
            }
        } else {
            const _keys = keys(obj);
            for (let i = 0, len = _keys.length; i < len; i++) {
                const key = _keys[i];
                size += key.length * strSize;
                size += sizeof(obj[key], { values });
            }
        }
    }

    if (isBuffer(obj)) return obj.length;

    return size;
}
