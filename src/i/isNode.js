/* Check if running in node.
 */

/* example
 * console.log(isNode); // -> true if running in node
 */

/* module
 * env: all
 */

/* typescript
 * export declare const isNode: boolean;
 */

_('objToStr');

exports =
    typeof process !== 'undefined' && objToStr(process) === '[object process]';
