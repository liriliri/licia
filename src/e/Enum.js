/* Enum type implementation.
 *
 * ### constructor
 *
 * |Name|Desc            |
 * |----|----------------|
 * |arr |Array of strings|
 *
 * |Name|Desc                  |
 * |----|----------------------|
 * |obj |Pairs of key and value|
 */

/* example
 * const importance = new Enum([
 *     'NONE', 'TRIVIAL', 'REGULAR', 'IMPORTANT', 'CRITICAL'
 * ]);
 * const val = 1;
 * if (val === importance.CRITICAL) {
 *     // Do something.
 * }
 */

/* module
 * env: all
 */

/* typescript
 * export declare class Enum {
 *     size: number;
 *     constructor(map: string[] | { [member: string]: any });
 *     [key: string]: any;
 * }
 */

_('Class freeze isArr each keys');

exports = Class({
    initialize: function Enum(map) {
        if (isArr(map)) {
            this.size = map.length;
            each(
                map,
                function(member, val) {
                    this[member] = val;
                },
                this
            );
        } else {
            this.size = keys(map).length;
            each(
                map,
                function(val, member) {
                    this[member] = val;
                },
                this
            );
        }

        freeze(this);
    }
});
