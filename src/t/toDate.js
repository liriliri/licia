/* Convert value to a Date.
 *
 * |Name  |Type|Desc            |
 * |------|----|----------------|
 * |val   |*   |Value to convert|
 * |return|Date|Converted Date  |
 */

/* example
 * toDate('20180501');
 * toDate('2018-05-01');
 * toDate(1525107450849);
 */

/* module
 * env: all
 * test: manual 
 */

_('isDate isStr');

exports = function(val) {
    if (!val) return new Date();

    if (isDate(val)) return val;

    if (isStr(val)) {
        var match = val.match(regDate);
        if (match) return new Date(match[1], match[2] - 1, match[3]);
    }

    return new Date(val);
};

var regDate = /^(\d{4})-?(\d{2})-?(\d{1,2})$/;
