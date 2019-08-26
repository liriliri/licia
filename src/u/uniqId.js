/* Generate a globally-unique id.
 *
 * |Name    |Type  |Desc              |
 * |--------|------|------------------|
 * |[prefix]|string|Id prefix         |
 * |return  |string|Globally-unique id|
 */

/* example
 * uniqId('eusita_'); // -> 'eustia_xxx'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function uniqId(prefix?: string): string;
 */

let idCounter = 0;

exports = function(prefix) {
    const id = ++idCounter + '';

    return prefix ? prefix + id : id;
};
