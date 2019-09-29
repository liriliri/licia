/* Modify object props without caring about letter case.
 *
 * ### constructor
 *
 * |Name|Type  |Desc         |
 * |----|------|-------------|
 * |obj |object|Target object|
 *
 * ### getKey
 *
 * Get key with preserved casing.
 *
 * |Name  |Type  |Desc        |
 * |------|------|------------|
 * |key   |string|Caseless key|
 * |return|string|Object key  |
 *
 * ### set
 *
 * Set value.
 *
 * |Name|Type  |Desc        |
 * |----|------|------------|
 * |key |string|Caseless key|
 * |val |*     |Value to set|
 *
 * ### get
 *
 * Get value.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |key   |string|Caseless key      |
 * |return|*     |Value of given key|
 *
 * ### remove
 *
 * Remove value.
 *
 * |Name|Type  |Desc        |
 * |----|------|------------|
 * |key |string|Caseless key|
 *
 * ### has
 *
 * Determine whether target object has given key.
 *
 * |Name  |Type   |Desc                 |
 * |------|-------|---------------------|
 * |key   |string |Caseless key         |
 * |return|boolean|True if has given key|
 */

/* example
 * const headers = { 'Content-Type': 'text/javascript' };
 * const c = new Caseless(headers);
 * c.set('content-type', 'text/css');
 * console.log(headers); // -> { 'Content-Type': 'text/css' }
 * c.getKey('content-type'); // -> 'Content-Type'
 * c.remove('content-type');
 * c.has('content-type'); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare class Caseless {
 *     constructor(obj: any);
 *     getKey(key: string): string | void;
 *     set(key: string, val: any): void;
 *     get(key: string): any;
 *     remove(key: string): void;
 *     has(key: string): boolean;
 * }
 */

_('Class lowerCase keys');

exports = Class({
    initialize(obj) {
        this._target = obj;
    },
    set(key, val) {
        const name = this.getKey(key);
        if (name) key = name;
        this._target[key] = val;
    },
    get(key) {
        key = this.getKey(key);

        if (key) {
            return this._target[key];
        }
    },
    getKey(key) {
        const name = lowerCase(key);
        const _keys = keys(this._target);
        for (let i = 0, len = _keys.length; i < len; i++) {
            const key = _keys[i];
            if (lowerCase(key) === name) return key;
        }
    },
    remove(key) {
        delete this._target[this.getKey(key)];
    },
    has(key) {
        return !!this.getKey(key);
    }
});
