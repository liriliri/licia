/* Compare version strings.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |v1    |Version to compare|
 * |v2    |Version to compare|
 * |return|Comparison result |
 */

/* example
 * cmpVersion('1.1.8', '1.0.4'); // -> 1
 * cmpVersion('1.0.2', '1.0.2'); // -> 0
 * cmpVersion('2.0', '2.0.0'); // -> 0
 * cmpVersion('3.0.1', '3.0.0.2'); // -> 1
 * cmpVersion('1.1.1', '1.2.3'); // -> -1
 */

/* module
 * env: all
 */

/* typescript
 * export declare function cmpVersion(v1: string, v2: string): number;
 */

_('toInt max');

exports = function(v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');

    const len = max(v1.length, v2.length);

    for (let i = 0; i < len; i++) {
        const num1 = toInt(v1[i]);
        const num2 = toInt(v2[i]);

        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }

    return 0;
};
