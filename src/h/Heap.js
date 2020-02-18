/* Heap implementation.
 *
 * ### size
 *
 * Heap size.
 *
 * ### constructor
 *
 * |Name|Desc      |
 * |----|----------|
 * |cmp |Comparator|
 *
 * ### clear
 *
 * Clear the heap.
 *
 * ### add
 *
 * Add an item to the heap.
 *
 * |Name  |Desc        |
 * |------|------------|
 * |item  |Item to add |
 * |return|Current size|
 *
 * ### poll
 *
 * Retrieve and remove the root item of the heap.
 *
 * ### peek
 *
 * Same as poll, but does not remove the item.
 */

/* example
 * const heap = new Heap(function(a, b) {
 *      return b - a;
 * });
 * heap.add(2);
 * heap.add(1);
 * heap.add(4);
 * heap.add(5);
 * heap.poll(); // -> 5
 * console.log(heap.size); // -> 4
 */

/* module
 * env: all
 * since: 1.11.0
 */

/* typescript
 * export declare class Heap {
 *     size: number;
 *     constructor(cmp?: Function);
 *     clear(): void;
 *     add(item: any): number;
 *     poll(): any;
 *     peek(): any;
 * }
 */

_('Class swap isSorted');

exports = Class({
    initialize: function Heap(cmp = isSorted.defComparator) {
        this._cmp = cmp;
        this.clear();
    },
    clear() {
        this._data = [];
        this.size = 0;
    },
    add(item) {
        this._data.push(item);
        this.size++;
        this._heapifyUp(this.size - 1);
        return this.size;
    },
    poll() {
        const data = this._data;
        if (this.size > 0) {
            const item = data[0];
            data[0] = data[this.size - 1];
            this.size--;
            this._heapifyDown(0);
            return item;
        }
    },
    peek() {
        if (this.size > 0) {
            return this._data[0];
        }
    },
    _heapifyUp(idx) {
        const data = this._data;
        let parent = parentIdx(idx);

        while (idx > 0 && this._cmp(data[parent], data[idx]) > 0) {
            swap(data, parent, idx);
            idx = parent;
            parent = parentIdx(idx);
        }
    },
    _heapifyDown(idx) {
        const { size } = this;
        const cmp = this._cmp;
        const data = this._data;

        while (leftChildIdx(idx) < size) {
            let smallerIdx = leftChildIdx(idx);
            const rightChild = rightChildIdx(idx);
            if (
                rightChild < size &&
                cmp(data[rightChildIdx], data[smallerIdx]) < 0
            ) {
                smallerIdx = rightChild;
            }
            if (cmp(data[idx], data[smallerIdx]) < 0) {
                break;
            } else {
                swap(data, idx, smallerIdx);
            }
            idx = smallerIdx;
        }
    }
});

function parentIdx(idx) {
    return Math.floor((idx - 1) / 2);
}

function leftChildIdx(idx) {
    return 2 * idx + 1;
}

function rightChildIdx(idx) {
    return 2 * idx + 2;
}
