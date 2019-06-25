/* Simple LRU cache.
 *
 * ### constructor
 *
 * |Name|Type  |Desc              |
 * |----|------|------------------|
 * |max |number|Max items in cache|
 *
 * ### has
 *
 * Check if has cache.
 *
 * |Name  |Type  |Desc     |
 * |------|------|---------|
 * |key   |string|Cache key|
 *
 * ### remove
 *
 * Remove cache.
 *
 * |Name  |Type  |Desc     |
 * |------|------|---------|
 * |key   |string|Cache key|
 *
 * ### get
 *
 * Get cache value.
 *
 * |Name  |Type  |Desc       |
 * |------|------|-----------|
 * |key   |string|Cache key  |
 * |return|*     |Cache value|
 *
 * ### set
 *
 * Set cache.
 *
 * |Name  |Type  |Desc       |
 * |------|------|-----------|
 * |key   |string|Cache key  |
 * |val   |*     |Cache value|
 *
 * ### clear
 *
 * Clear cache.
 */

/* example
 * const cache = new Lru(50);
 * cache.set('test', 'licia');
 * cache.get('test'); // -> 'licia'
 */

/* module
 * env: all
 * test: all
 * since: 1.4.5
 */

/* typescript
 * export declare class Lru {
 *     constructor(max: number): void;
 *     has(key: string): boolean;
 *     remove(key: string): void;
 *     get(key: string): any;
 *     set(key: string, val: any): void;
 *     clear(): void;
 * }
 */

_('LinkedList PseudoMap');

exports = class Lru {
    constructor(max) {
        this._max = max;
        this._list = new LinkedList();
        this._map = new PseudoMap();
    }
    has(key) {
        return this._map.has(key);
    }
    remove(key) {
        const map = this._map;

        if (this.has(key)) {
            const node = map.get(key);
            this._list.rmNode(node);
            map.delete(key);
        }
    }
    get(key) {
        const list = this._list;
        const map = this._map;

        let ret;

        if (this.has(key)) {
            const node = map.get(key);
            ret = node.value.val;
            list.rmNode(node);
            list.unshift(node.value);
            map.set(key, list.head);
        }

        return ret;
    }
    set(key, val) {
        const list = this._list;
        const map = this._map;

        if (this.has(key)) {
            const node = map.get(key);
            list.rmNode(node);
            list.unshift({
                key,
                val
            });
            map.set(key, list.head);
        } else {
            list.unshift({
                key,
                val
            });
            map.set(key, list.head);
            if (list.size > this._max) {
                const item = list.pop();
                map.delete(item.key);
            }
        }
    }
    clear() {
        this._map = new PseudoMap();
        this._list = new LinkedList();
    }
};
