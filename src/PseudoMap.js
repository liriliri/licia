/* Like es6 Map, without iterators.
 *
 * It supports only string keys, and uses Map if exists.
 */

/* example
 * const map = new PseudoMap();
 * map.set('1', 1);
 * map.get('1'); // -> 1
 */

/* module
 * env: all
 */

/* typescript
 * export declare const PseudoMap: typeof Map;
 */

_('Class root defineProp keys each isArr isUndef');

if (root.Map && !LICIA_TEST) {
    exports = root.Map;
} else {
    exports = Class({
        initialize: function PseudoMap(data) {
            this.clear();

            const self = this;

            defineProp(this, 'size', {
                get() {
                    return keys(self._data).length;
                },
                set() {},
                enumerable: true,
                configurable: true
            });

            if (data instanceof exports) {
                data.forEach(function(val, key) {
                    this.set(key, val);
                }, this);
            } else if (isArr(data)) {
                each(
                    data,
                    function(val) {
                        this.set(val[0], val[1]);
                    },
                    this
                );
            }
        },
        forEach(fn, ctx) {
            each(
                this._data,
                function(val, key) {
                    fn.call(this, val, key);
                },
                ctx
            );
        },
        has(key) {
            return !isUndef(this._data[key]);
        },
        get(key) {
            return this._data[key];
        },
        set(key, val) {
            this._data[key] = val;
        },
        delete(key) {
            delete this._data[key];
        },
        clear() {
            this._data = {};
        }
    });
}
