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
 * |Name  |Type  |Desc        |
 * |------|------|------------|
 * |item  |*     |Item to add |
 * |return|number|Current size|
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
 * |Name    |Type    |Desc                      |
 * |--------|--------|--------------------------|
 * |iterator|function|Function invoked iteration|
 * |[ctx]   |*       |Function context          |
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
 * test: all
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

_('Class');

exports = Class({
    initialize: function Stack() {
        this.clear();
    },
    clear: function() {
        this._items = [];
        this.size = 0;
    },
    push: function(item) {
        this._items.push(item);

        return ++this.size;
    },
    pop: function() {
        if (!this.size) return;

        this.size--;

        return this._items.pop();
    },
    peek: function() {
        return this._items[this.size - 1];
    },
    forEach: function(iterator, ctx) {
        ctx = arguments.length > 1 ? ctx : this;

        const items = this._items;

        for (let i = this.size - 1, j = 0; i >= 0; i--, j++) {
            iterator.call(ctx, items[i], j, this);
        }
    },
    toArr: function() {
        return this._items.slice(0).reverse();
    }
});
