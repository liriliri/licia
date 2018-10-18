/* Doubly-linked list implementation.
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
 * ### forEach
 * 
 * Iterate over the list.
 * 
 * ### toArr
 * 
 * Convert the list to a JavaScript array.
 */

/* example
 * var linkedList = new LinkedList();
 * linkedList.push(5);
 * linkedList.pop(); // -> 5
 */

/* module
 * env: all
 * test: all
 */

_('Class');

exports = Class({
    initialize: function LinkedList() {
        this.tail = null;
        this.head = null;
        this.size = 0;
    },
    push: function(val) {
        var node = new Node(val, this.tail);

        this.tail = node;
        this.head = this.head || node;

        this.size++;

        return this.size;
    },
    pop: function() {
        if (!this.tail) return;

        var node = this.tail;

        this.tail = node.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        this.size--;

        return node.value;
    },
    unshift: function(val) {
        var node = new Node(val, null, this.head);

        this.head = node;
        this.tail = this.tail || node;

        this.size++;

        return this.size;
    },
    shift: function() {
        if (!this.head) return;

        var node = this.head;

        this.head = node.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        this.size--;

        return node.value;
    },
    forEach: function(iteratee, ctx) {
        ctx = arguments.length > 1 ? ctx : this;

        for (var i = 0, current = this.head; current !== null; i++) {
            iteratee.call(ctx, current.value, i, this);
            current = current.next;
        }
    },
    toArr: function() {
        var arr = new Array(this.size);

        for (var i = 0, current = this.head; current !== null; i++) {
            arr[i] = current.value;
            current = current.next;
        }

        return arr;
    }
});

var Node = (exports.Node = Class({
    initialize: function Node(val, prev, next) {
        this.value = val;

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
