/* Doubly-linked list implementation.
 *
 * ### size
 *
 * List size.
 *
 * ### head.
 *
 * First node.
 *
 * ### tail
 *
 * Last node.
 *
 * ### push
 *
 * Add an value to the end of the list.
 *
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |val   |*     |Value to push|
 * |return|number|Current size |
 *
 * ### pop
 *
 * Get the last value of the list.
 *
 * ### unshift
 *
 * Add an value to the head of the list.
 *
 * ### shift
 *
 * Get the first value of the list.
 *
 * ### rmNode
 *
 * Remove node.
 *
 * ### find
 *
 * Find node.
 *
 * |Name  |Type    |Desc                             |
 * |------|--------|---------------------------------|
 * |fn    |function|Function invoked per iteration   |
 * |return|node    |First value that passes predicate|
 *
 * ### forEach
 *
 * Iterate over the list.
 *
 * ### toArr
 *
 * Convert the list to a JavaScript array.
 */

/* example
 * const linkedList = new LinkedList();
 * linkedList.push(5);
 * linkedList.pop(); // -> 5
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare namespace LinkedList {
 *     class Node {
 *         value: any;
 *         prev: Node | null;
 *         next: Node | null;
 *     }
 * }
 * export declare class LinkedList {
 *     size: number;
 *     head: LinkedList.Node;
 *     tail: LinkedList.Node;
 *     push(val: any): number;
 *     pop(): any;
 *     unshift(val: any): number;
 *     shift(): any;
 *     find(fn: Function): LinkedList.Node | void;
 *     delNode(node: LinkedList.Node): void;
 *     forEach(iterator: Function, ctx?: any);
 *     toArr(): any[];
 * }
 */

_('Class');

exports = Class({
    initialize: function LinkedList() {
        this.tail = null;
        this.head = null;
        this.size = 0;
    },
    push(val) {
        const node = new Node(val, this.tail, null, this);

        this.tail = node;
        this.head = this.head || node;

        this.size++;

        return this.size;
    },
    pop() {
        if (!this.tail) return;

        const node = this.tail;

        this.tail = node.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        this.size--;

        return node.value;
    },
    unshift(val) {
        const node = new Node(val, null, this.head, this);

        this.head = node;
        this.tail = this.tail || node;

        this.size++;

        return this.size;
    },
    shift() {
        if (!this.head) return;

        const node = this.head;

        this.head = node.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        this.size--;

        return node.value;
    },
    rmNode(node) {
        if (node.list !== this) {
            throw Error('Node does not belong to this list');
        }

        const { next, prev } = node;

        if (next) {
            next.prev = prev;
        }
        if (prev) {
            prev.next = next;
        }
        if (node === this.head) {
            this.head = next;
        }
        if (node === this.tail) {
            this.tail = prev;
        }
        node.list = null;
        node.prev = null;
        node.next = null;

        this.size--;
    },
    find(fn) {
        for (let i = 0, current = this.head; current !== null; i++) {
            if (fn(current.value)) {
                return current;
            }
            current = current.next;
        }
    },
    forEach(iterator, ctx) {
        ctx = arguments.length > 1 ? ctx : this;

        for (let i = 0, current = this.head; current !== null; i++) {
            iterator.call(ctx, current.value, i, this);
            current = current.next;
        }
    },
    toArr() {
        const arr = new Array(this.size);

        for (let i = 0, current = this.head; current !== null; i++) {
            arr[i] = current.value;
            current = current.next;
        }

        return arr;
    }
});

const Node = (exports.Node = Class({
    initialize: function Node(val, prev, next, list) {
        this.value = val;
        this.list = list;

        if (prev) {
            prev.next = this;
            this.prev = prev;
        } else {
            this.prev = null;
        }

        if (next) {
            next.prev = this;
            this.next = next;
        } else {
            this.next = null;
        }
    }
}));
