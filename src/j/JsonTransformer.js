/* Json to json transformer.
 *
 * ### constructor
 *
 * |Name   |Desc                     |
 * |-------|-------------------------|
 * |data={}|Json object to manipulate|
 *
 * ### set
 *
 * Set object value.
 *
 * |Name|Desc        |
 * |----|------------|
 * |key |Object key  |
 * |val |Value to set|
 *
 * If key is not given, the whole source object is replaced by val.
 *
 * ### get
 *
 * Get object value.
 *
 * |Name  |Desc                           |
 * |------|-------------------------------|
 * |key   |Object key                     |
 * |return|Specified value or whole object|
 *
 * ### remove
 *
 * Remove object value.
 *
 * |Name|Desc                 |
 * |----|---------------------|
 * |key |Object keys to remove|
 *
 * ### map
 *
 * Shortcut for array map.
 *
 * |Name|Desc                          |
 * |----|------------------------------|
 * |from|From object path              |
 * |to  |Target object path            |
 * |fn  |Function invoked per iteration|
 *
 * ### filter
 *
 * Shortcut for array filter.
 *
 * ### compute
 *
 * Compute value from several object values.
 *
 * |Name|Desc                            |
 * |----|--------------------------------|
 * |from|Source values                   |
 * |to  |Target object path              |
 * |fn  |Function to compute target value|
 */

/* example
 * const data = new JsonTransformer({
 *     books: [{
 *         title: 'Book 1',
 *         price: 5
 *     }, {
 *         title: 'Book 2',
 *         price: 10
 *     }],
 *     author: {
 *         lastname: 'Su',
 *         firstname: 'RedHood'
 *     }
 * });
 * data.filter('books', function (book) { return book.price > 5 });
 * data.compute('author', function (author) { return author.firstname + author.lastname });
 * data.set('count', data.get('books').length);
 * data.get(); // -> {books: [{title: 'Book 2', price: 10}], author: 'RedHoodSu', count: 1}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare class JsonTransformer {
 *     constructor(data: any);
 *     set(key: string, val: any): JsonTransformer;
 *     get(key?: string): any;
 *     map(from: string, to: string, fn: types.AnyFn): JsonTransformer;
 *     map(from: string, fn: types.AnyFn): JsonTransformer;
 *     filter(from: string, to: string, fn: types.AnyFn): JsonTransformer;
 *     filter(from: string, fn: types.AnyFn): JsonTransformer;
 *     remove(keys: string | string[]): JsonTransformer;
 *     compute(from: string | string[], to: string, fn: types.AnyFn): JsonTransformer;
 *     compute(from: string, fn: types.AnyFn): JsonTransformer;
 *     toString(): string;
 * }
 */

_('Class safeSet safeGet map filter isFn safeDel toArr each types');

exports = Class({
    className: 'JsonTransformer',
    initialize(data) {
        this._data = data || {};
    },
    set(key, val) {
        if (arguments.length === 1) {
            this._data = key;
            return this;
        }

        safeSet(this._data, key, val);

        return this;
    },
    get(key) {
        if (key == null) return this._data;

        return safeGet(this._data, key);
    },
    map(from, to, fn) {
        if (isFn(from)) return this.set(map(this._data, from, this));

        if (isFn(to)) {
            fn = to;
            to = from;
        }

        return this.set(to, map(this.get(from), fn, this));
    },
    filter(from, to, fn) {
        if (isFn(from)) return this.set(filter(this._data, from, this));

        if (isFn(to)) {
            fn = to;
            to = from;
        }

        return this.set(to, filter(this.get(from), fn, this));
    },
    remove(keys) {
        keys = toArr(keys);

        const data = this._data;

        each(keys, function(key) {
            safeDel(data, key);
        });

        return this;
    },
    compute(from, to, fn) {
        if (isFn(from)) return this.set(from.call(this, this._data));

        if (isFn(to)) return this.set(from, to.call(this, this.get(from)));

        from = map(
            toArr(from),
            function(key) {
                return safeGet(this._data, key);
            },
            this
        );

        return this.set(to, fn.apply(this, from));
    },
    toString() {
        return JSON.stringify(this._data);
    }
});
