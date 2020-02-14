/* Generate a globally-unique id.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |prefix|Id prefix         |
 * |return|Globally-unique id|
 */

/* example
 * uniqId('eusita_'); // -> 'eustia_xxx'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function uniqId(prefix?: string): string;
 */

let idCounter = 0;

exports = function(prefix) {
    const id = ++idCounter + '';

    return prefix ? prefix + id : id;
};
