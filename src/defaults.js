/* Fill in undefined properties in object with the first value present in the following list of defaults objects.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |obj   |Destination object|
 * |...src|Sources objects   |
 * |return|Destination object|
 */

/* example
 * defaults({ name: 'RedHood' }, { name: 'Unknown', age: 24 }); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function defaults<T, T1>(obj: T, source1: T1): T & T1;
 * export declare function defaults<T, T1, T2>(
 *     obj: T,
 *     source1: T1,
 *     source2: T2
 * ): T & T1 & T2;
 * export declare function defaults<T, T1, T2, T3>(
 *     obj: T,
 *     source1: T1,
 *     source2: T2,
 *     source3: T3
 * ): T & T1 & T2 & T3;
 * export declare function defaults(obj: any, ...src: any[]): any;
 */

_('createAssigner allKeys');

exports = createAssigner(allKeys, true);
