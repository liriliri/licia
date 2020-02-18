/* Queue data structure.
 *
 * ### size
 *
 * Queue size.
 *
 * ### clear
 *
 * Clear the queue.
 *
 * ### enqueue
 *
 * Add an item to the queue.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |item  |Item to enqueue|
 * |return|Current size   |
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
 * |Name    |Desc                      |
 * |--------|--------------------------|
 * |iterator|Function invoked iteration|
 * |ctx     |Function context          |
 *
 * ### toArr
 *
 * Convert queue to a JavaScript array.
 */

/* example
 * const queue = new Queue();
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
 */

/* typescript
 * export declare class Queue {
 *     size: number;
 *     clear(): void;
 *     enqueue(item: any): number;
 *     dequeue(): any;
 *     peek(): any;
 *     forEach(iterator: Function, context?: any): void;
 *     toArr(): any[];
 * }
 */

_('Class');

exports = Class({
    initialize: function Queue() {
        this.clear();
    },
    clear() {
        this._items = [];
        this.size = 0;
    },
    enqueue(item) {
        this._items.push(item);

        return ++this.size;
    },
    dequeue() {
        if (!this.size) return;

        this.size--;

        return this._items.shift();
    },
    peek() {
        if (!this.size) return;

        return this._items[0];
    },
    forEach(iterator, ctx) {
        ctx = arguments.length > 1 ? ctx : this;

        const items = this._items;

        for (let i = 0, size = this.size; i < size; i++) {
            iterator.call(ctx, items[i], i, this);
        }
    },
    toArr() {
        return this._items.slice(0);
    }
});
