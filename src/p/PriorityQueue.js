/* Priority queue implementation.
 *
 * ### size
 *
 * Queue size.
 *
 * ### constructor
 *
 * |Name |Type    |Desc      |
 * |-----|--------|----------|
 * |[cmp]|function|Comparator|
 *
 * ### clear
 *
 * Clear the queue.
 *
 * ### enqueue
 *
 * Add an item to the queue.
 *
 * |Name  |Type  |Desc        |
 * |------|------|------------|
 * |item  |*     |Item to add |
 * |return|number|Current size|
 *
 * ### dequeue
 *
 * Retrieve and remove the highest priority item of the queue.
 *
 * ### peek
 *
 * Same as dequeue, but does not remove the item.
 */

/* example
 * const queue = new PriorityQueue(function (a, b) {
 *     if (a.priority > b.priority) return 1;
 *     if (a.priority === b.priority) return -1;
 *     return 0;
 * });
 * queue.enqueue({
 *     priority: 1000,
 *     value: 'apple',
 * });
 * queue.enqueue({
 *     priority: 500,
 *     value: 'orange'
 * });
 * queue.dequeue(); // -> { priority: 1000, value: 'apple' }
 */

/* module
 * env: all
 * test: all
 * since: 1.11.0
 */

/* typescript
 * export declare class PriorityQueue {
 *     size: number;
 *     constructor(cmp?: Function);
 *     clear(): void;
 *     enqueue(item: any): number;
 *     dequeue(): any;
 *     peek(): any;
 * }
 */

_('Class Heap isSorted wrap');

exports = Class({
    initialize: function PriorityQueue(cmp = isSorted.defComparator) {
        this._heap = new Heap(wrap(cmp, (fn, a, b) => fn(a, b) * -1));
        this.size = 0;
    },
    clear() {
        this._heap.clear();
        this.size = 0;
    },
    enqueue(item) {
        this._heap.add(item);
        this.size++;
        return this.size;
    },
    dequeue() {
        const item = this._heap.poll();
        if (item) {
            this.size--;
            return item;
        }
    },
    peek() {
        return this._heap.peek();
    }
});
