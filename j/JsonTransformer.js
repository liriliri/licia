/* Json to json transformer.
 *
 * ### constructor
 * 
 * |Name     |Type  |Desc                     |
 * |---------|------|-------------------------|
 * |[data={}]|object|Json object to manipulate|
 * 
 * ### set
 * 
 * Set object value.
 * 
 * |Name |Type  |Desc        |
 * |-----|------|------------|
 * |[key]|string|Object key  |
 * |val  |*     |Value to set|
 * 
 * If key is not given, the whole source object is replaced by val.
 * 
 * ### get
 * 
 * Get object value.
 * 
 * |Name  |Type  |Desc                           |
 * |------|------|-------------------------------|
 * |[key] |string|Object key                     |
 * |return|*     |Specified value or whole object|
 * 
 * ### remove
 * 
 * |Name|Type        |Desc                 |
 * |----|------------|---------------------|
 * |key |array string|Object keys to remove|
 * 
 * ### map
 * 
 * Shortcut for array map.
 * 
 * |Name|Type    |Desc                          |
 * |----|--------|------------------------------|
 * |from|string  |From object path              |
 * |to  |string  |Target object path            |
 * |fn  |function|Function invoked per iteration|
 * 
 * ### filter
 * 
 * Shortcut for array filter.
 * 
 * ### compute
 * 
 * Compute value from several object values.
 * 
 * |Name|Type        |Desc                            |
 * |----|------------|--------------------------------|
 * |from|array string|Source values                   |
 * |to  |string      |Target object path              |
 * |fn  |function    |Function to compute target value|
 *
 * ```javascript
 * var data = new JsonTransformer({
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
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('Class safeSet safeGet map filter isFn safeDel toArr');

exports = Class({
    className: 'JsonTransformer',
    initialize: function (data) 
    {
        this._data = data || {};
    },
    set: function (key, val) 
    {
        if (arguments.length === 1) 
        {
            this._data = key;
            return this;
        } 
        
        safeSet(this._data, key, val);

        return this;
    },
    get: function (key) 
    {
        if (key == null) return this._data;

        return safeGet(this._data, key);
    },
    map: function (from, to, fn) 
    {
        if (isFn(from)) return this.set(map(this._data, from, this));

        if (isFn(to)) 
        {
            fn = to;
            to = from;
        }

        return this.set(to, map(this.get(from), fn, this));
    },
    filter: function (from, to, fn)
    {
        if (isFn(from)) return this.set(filter(this._data, from, this));

        if (isFn(to)) 
        {
            fn = to;
            to = from;
        }

        return this.set(to, filter(this.get(from), fn, this));
    },
    remove: function (keys) 
    {
        keys = toArr(keys);

        var data = this._data;

        each(keys, function (key) { safeDel(data, key); });

        return this;
    },
    compute: function (from, to, fn) 
    {
        if (isFn(from)) return this.set(from.call(this, this._data));

        if (isFn(to)) return this.set(from, to.call(this, this.get(from)));

        from = map(toArr(from), function (key) { return safeGet(this._data, key); }, this);

        return this.set(to, fn.apply(this, from));
    },
    toString: function () 
    {
        return JSON.stringify(this._data);
    }
});