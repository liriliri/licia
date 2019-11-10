/* Bloom filter implementation.
 *
 * ### constructor
 *
 * |Name     |Type  |Desc                    |
 * |---------|------|------------------------|
 * |size=1024|number|Number of buckets       |
 * |k=3      |number|Number of Hash functions|
 *
 * ### add
 *
 * Add an element to the filter.
 *
 * |Name|Type  |Desc        |
 * |----|------|------------|
 * |val |string|Value to add|
 *
 * ### test
 *
 * Test if an element is in the filter.
 *
 * |Name  |Type   |Desc                                     |
 * |------|-------|-----------------------------------------|
 * |val   |string |Value to test                            |
 * |return|boolean|True if probably, false if definitely not|
 */

/* example
 * const bloom = new BloomFilter(256, 3);
 * bloom.add('Bruce Wayne');
 * bloom.add('Clark Kent');
 * bloom.test('Clark Kent'); // -> true
 * bloom.test('Bruce Wayne'); // -> true
 * bloom.test('Tony Stark'); // -> false
 */

/* module
 * env: all
 * test: all
 * since: 1.10.0
 */

/* typescript
 * export declare class BloomFilter {
 *     constructor(size?: number, k?: number);
 *     add(val: string): void;
 *     test(val: string): boolean;
 * }
 */

// https://github.com/jasondavies/bloomfilter.js
_('Class fill fnv1a strHash each some');

exports = Class({
    initialize(size = 1024, k = 3) {
        this._buckets = fill(new Array(size), 0);
        this._k = k;
        this._size = size;
    },
    add(val) {
        each(this._locations(val), location => (this._buckets[location] = 1));
    },
    test(val) {
        return !some(
            this._locations(val),
            location => this._buckets[location] === 0
        );
    },
    _locations(val) {
        const ret = [];
        const size = this._size;
        const a = fnv1a(val);
        const b = strHash(val);

        // http://willwhim.wpengine.com/2011/09/03/producing-n-hash-functions-by-hashing-only-once/
        for (let i = 0; i < this._k; i++) {
            ret[i] = (a + b * i) % size;
        }

        console.log(ret);
        return ret;
    }
});
