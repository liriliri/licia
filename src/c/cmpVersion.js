/* Compare version strings.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |v1    |string|Version to compare|
 * |v2    |string|Version to compare|
 * |return|number|Comparison result |
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
 * test: all
 */

_('toInt max');

function exports(v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');

    var len = max(v1.length, v2.length);

    for (var i = 0; i < len; i++) {
        var num1 = toInt(v1[i]),
            num2 = toInt(v2[i]);

        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }

    return 0;
}
