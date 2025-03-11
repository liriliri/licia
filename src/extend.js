/* Copy all of the properties in the source objects over to the destination object.
 *
 * |Name       |Desc              |
 * |-----------|------------------|
 * |destination|Destination object|
 * |...sources |Sources objects   |
 * |return     |Destination object|
 */

/* example
 * extend({ name: 'RedHood' }, { age: 24 }); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function extend<T, T1>(destination: T, source1: T1): T & T1;
 * export declare function extend<T, T1, T2>(
 *     destination: T,
 *     source1: T1,
 *     source2: T2
 * ): T & T1 & T2;
 * export declare function extend<T, T1, T2, T3>(
 *     destination: T,
 *     source1: T1,
 *     source2: T2,
 *     source3: T3
 * ): T & T1 & T2 & T3;
 * export declare function extend(destination: any, ...sources: any[]): any;
 */

_('createAssigner allKeys');

exports = createAssigner(allKeys);
