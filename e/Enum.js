/* Enum type implementation.
 *
 * ### constructor
 *
 * |Name|Type |Desc            |
 * |----|-----|----------------|
 * |arr |array|Array of strings|
 *
 * |Name|Type  |Desc                  |
 * |----|------|----------------------|
 * |obj |object|Pairs of key and value|
 *
 * ```javascript
 * var importance = new Enum([
 *     'none', 'trivial', 'regular', 'important', 'critical'
 * ]);
 *
 * if (val === importance.critical)
 * {
 *     // Do something.
 * }
 * ```
 */

_('Class freeze isArr each keys');

exports = Class({
    initialize: function Enum(map)
    {
        if (isArr(map))
        {
            this.size = map.length;
            each(map, function (member, val)
            {
                this[member] = val;
            }, this);
        } else
        {
            this.size = keys(map).length;
            each(map, function (val, member)
            {
                this[member] = val;
            }, this);
        }

        freeze(this);
    }
});