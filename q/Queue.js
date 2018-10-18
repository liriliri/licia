/* Queue data structure.
 *
 * ### clear
 *
 * Clear the queue.
 *
 * ### enqueue
 *
 * Add an item to the queue.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |item  |*     |Item to enqueue|
 * |return|number|Current size   |
 *
 * ### dequeue
 *
 * Remove the first item of the queue.
 *
 * ### peek
 *
 * Get the first item without removing it.
 *
 * ### forEach
 *
 * Iterate over the queue.
 *
 * |Name    |Type    |Desc                      |
 * |--------|--------|--------------------------|
 * |iteratee|function|Function invoked iteration|
 * |[ctx]   |*       |Function context          |
 *
 * ### toArr
 *
 * Convert queue to a JavaScript array.
 */

/* example
 * var queue = new Queue();
 *
 * console.log(queue.size); // -> 0
 * queue.enqueue(2);
 * queue.enqueue(3);
 * queue.dequeue(); // -> 2
 * console.log(queue.size); // -> 1
 * queue.peek(); // -> 3
 * console.log(queue.size); // -> 1
 */

/* module
 * env: all
 * test: all
 */

_('Class');

exports = Class({
    initialize: function Queue() {
        this.clear();
    },
    clear: function() {
        this._items = [];
        this.size = 0;
    },
    enqueue: function(item) {
        this._items.push(item);

        return ++this.size;
    },
    dequeue: function() {
        if (!this.size) return;

        this.size--;

        return this._items.shift();
    },
    peek: function() {
        if (!this.size) return;

        return this._items[0];
    },
    forEach: function(iteratee, ctx) {
        ctx = arguments.length > 1 ? ctx : this;

        var items = this._items;

        for (var i = 0, size = this.size; i < size; i++) {
            iteratee.call(ctx, items[i], i, this);
        }
    },
    toArr: function() {
        return this._items.slice(0);
    }
});
