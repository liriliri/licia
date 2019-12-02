/* Hash table implementation.
 *
 * ### constructor
 *
 * |Name   |Type  |Desc       |
 * |-------|------|-----------|
 * |size=32|number|Bucket size|
 *
 * ### set
 *
 * Set value.
 *
 * |Name|Type  |Desc        |
 * |----|------|------------|
 * |key |string|Value key   |
 * |val |*     |Value to set|
 *
 * ### get
 *
 * Get value.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |key   |string|Value key         |
 * |return|*     |Value of given key|
 *
 * ### has
 *
 * Check if has value.
 *
 * |Name  |Type   |Desc                |
 * |------|-------|--------------------|
 * |key   |string |Value key           |
 * |return|boolean|True if value exists|
 *
 * ### delete
 *
 * Delete value.
 */

/* example
 * const hashTable = new HashTable(128);
 * hashTable.set('name', 'redhoodsu');
 * hashTable.get('name'); // -> 'redhoodsu'
 * hashTable.has('name'); // -> true
 * hashTable.delete('name');
 * hashTable.has('name'); // -> false
 */

/* module
 * env: all
 * since: 1.13.0
 */

/* typescript
 * export declare class HashTable {
 *     constructor(size?: number);    
 *     set(key: string, val: any): void;
 *     get(key: string): any;
 *     has(key: string): boolean;
 *     delete(key: string): void;
 * }
 */

_('Class LinkedList map strHash has');

exports = Class({
    initialize: function HashTable(size = 32) {
        this._buckets = map(Array(size), () => new LinkedList());
        this._keys = {};
    },
    set(key, val) {
        const keyHash = this._hash(key);
        this._keys[key] = keyHash;
        const linkedList = this._buckets[keyHash];
        const node = linkedList.find(val => val.key === key);
        if (!node) {
            linkedList.push({ key, value: val });
        } else {
            node.value.value = val;
        }
    },
    get(key) {
        const linkedList = this._buckets[this._hash(key)];
        const node = linkedList.find(val => val.key === key);

        if (node) {
            return node.value.value;
        }
    },
    has(key) {
        return has(this._keys, key);
    },
    delete(key) {
        const keyHash = this._hash(key);
        delete this._keys[key];
        const linkedList = this._buckets[keyHash];
        const node = linkedList.find(val => val.key === key);
        if (node) {
            linkedList.rmNode(node);
        }
    },
    _hash(key) {
        return strHash(key) % this._buckets.length;
    }
});
