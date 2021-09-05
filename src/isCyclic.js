/* Detect cyclic object reference.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |val   |Value to detect        |
 * |return|True if value is cyclic|
 */

/* example
 * isCyclic({}); // -> false
 * const obj = { a: 1 };
 * // @ts-ignore
 * obj.b = obj;
 * isCyclic(obj); // -> true
 */

/* module
 * env: all
 * since: 1.30.0
 */

/* typescript
 * export declare function isCyclic(val: any): boolean;
 */

_('Class keys isObj');

exports = function(val, parents) {
    // Slower than is-circular because of different ways to check if value is an object.
    if (!isObj(val)) {
        return false;
    }

    if (parents && parents.contains(val)) {
        return true;
    }

    parents = new Node(val, parents);
    const _keys = keys(val);
    for (let i = 0, len = _keys.length; i < len; i++) {
        if (exports(val[_keys[i]], parents)) {
            return true;
        }
    }

    return false;
};

/* https://github.com/tjmehta/is-circular
 * Use singly linked list to avoid creating arrays.
 */
const Node = Class({
    initialize: function Node(val, next) {
        this.val = val;
        this.next = next;
    },
    contains(val) {
        let cursor = this;

        while (cursor) {
            if (cursor.val === val) {
                return true;
            }
            cursor = cursor.next;
        }

        return false;
    }
});
