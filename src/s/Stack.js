/* Stack data structure.
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
 * |iteratee|function|Function invoked iteration|
 * |[ctx]   |*       |Function context          |
 *
 * ### toArr
 *
 * Convert the stack to a JavaScript array.
 */

/* example
 * var stack = new Stack();
 *
 * stack.push(2); // -> 1
 * stack.push(3); // -> 2
 * stack.pop(); // -> 3
 */

/* module
 * env: all
 * test: all
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
        this.size--;

        return this._items.pop();
    },
    peek: function() {
        return this._items[this.size - 1];
    },
    forEach: function(iteratee, ctx) {
        ctx = arguments.length > 1 ? ctx : this;

        var items = this._items;

        for (var i = this.size - 1, j = 0; i >= 0; i--, j++) {
            iteratee.call(ctx, items[i], j, this);
        }
    },
    toArr: function() {
        return this._items.slice(0).reverse();
    }
});
