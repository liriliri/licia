/* Stack data structure.
 *
 * ### size
 *
 * Stack size.
 *
 * ### clear
 *
 * Clear the stack.
 *
 * ### push
 *
 * Add an item to the stack.
 *
 * |Name  |Desc        |
 * |------|------------|
 * |item  |Item to add |
 * |return|Current size|
 *
 * ### pop
 *
 * Get the last item of the stack.
 *
 * ### peek
 *
 * Get the last item without removing it.
 *
 * ### forEach
 *
 * Iterate over the stack.
 *
 * |Name    |Desc                      |
 * |--------|--------------------------|
 * |iterator|Function invoked iteration|
 * |ctx     |Function context          |
 *
 * ### toArr
 *
 * Convert the stack to a JavaScript array.
 */

/* example
 * const stack = new Stack();
 *
 * stack.push(2); // -> 1
 * stack.push(3); // -> 2
 * stack.pop(); // -> 3
 */

/* module
 * env: all
 */

/* typescript
 * export declare class Stack {
 *     size: number;
 *     clear(): void;
 *     push(item: any): number;
 *     pop(): any;
 *     peek(): any;
 *     forEach(iterator: Function, context?: any): void;
 *     toArr(): any[];
 * }
 */

_('Class reverse');

exports = Class({
    initialize: function Stack() {
        this.clear();
    },
    clear() {
        this._items = [];
        this.size = 0;
    },
    push(item) {
        this._items.push(item);

        return ++this.size;
    },
    pop() {
        if (!this.size) return;

        this.size--;

        return this._items.pop();
    },
    peek() {
        return this._items[this.size - 1];
    },
    forEach(iterator, ctx) {
        ctx = arguments.length > 1 ? ctx : this;

        const items = this._items;

        for (let i = this.size - 1, j = 0; i >= 0; i--, j++) {
            iterator.call(ctx, items[i], j, this);
        }
    },
    toArr() {
        return reverse(this._items);
    }
});
