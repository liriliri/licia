/* Simple but extremely useful date format function.
 *
 * |Name           |Type   |Desc                 |
 * |---------------|-------|---------------------|
 * |[date=new Date]|Date   |Date object to format|
 * |mask           |string |Format mask          |
 * |[utc=false]    |boolean|UTC or not           |
 * |[gmt=false]    |boolean|GMT or not           |
 *
 * |Mask|Description                                                      |
 * |----|-----------------------------------------------------------------|
 * |d   |Day of the month as digits; no leading zero for single-digit days|
 * |dd  |Day of the month as digits; leading zero for single-digit days   |
 * |ddd |Day of the week as a three-letter abbreviation                   |
 * |dddd|Day of the week as its full name                                 |
 * |m   |Month as digits; no leading zero for single-digit months         |
 * |mm  |Month as digits; leading zero for single-digit months            |
 * |mmm |Month as a three-letter abbreviation                             |
 * |mmmm|Month as its full name                                           |
 * |yy  |Year as last two digits; leading zero for years less than 10     |
 * |yyyy|Year represented by four digits                                  |
 * |h   |Hours; no leading zero for single-digit hours (12-hour clock)    |
 * |hh  |Hours; leading zero for single-digit hours (12-hour clock)       |
 * |H   |Hours; no leading zero for single-digit hours (24-hour clock)    |
 * |HH  |Hours; leading zero for single-digit hours (24-hour clock)       |
 * |M   |Minutes; no leading zero for single-digit minutes                |
 * |MM  |Minutes; leading zero for single-digit minutes                   |
 * |s   |Seconds; no leading zero for single-digit seconds                |
 * |ss  |Seconds; leading zero for single-digit seconds                   |
 * |l L |Milliseconds. l gives 3 digits. L gives 2 digits                 |
 * |t   |Lowercase, single-character time marker string: a or p           |
 * |tt  |Lowercase, two-character time marker string: am or pm            |
 * |T   |Uppercase, single-character time marker string: A or P           |
 * |TT  |Uppercase, two-character time marker string: AM or PM            |
 * |Z   |US timezone abbreviation, e.g. EST or MDT                        |
 * |o   |GMT/UTC timezone offset, e.g. -0500 or +0230                     |
 * |S   |The date's ordinal suffix (st, nd, rd, or th)                    |
 * |UTC:|Must be the first four characters of the mask                    |
 *
 * ```javascript
 * dateFormat('isoDate'); // -> 2016-11-19
 * dateFormat('yyyy-mm-dd HH:MM:ss'); // -> 2016-11-19 19:00:04
 * dateFormat(new Date(), 'yyyy-mm-dd'); // -> 2016-11-19
 * ```
 */

_('isStr isDate toStr lpad');

function exports(date, mask, utc, gmt)
{
    if (arguments.length === 1 &&
        isStr(date) &&
        !regNum.test(date))
    {
        mask = date;
        date = undefined;
    }

    date = date || new Date;

    if (!isDate(date)) date = new Date(date);

    mask = toStr(exports.masks[mask] || mask || exports.masks['default']);

    var maskSlice = mask.slice(0, 4);

    if (maskSlice === 'UTC:' || maskSlice === 'GMT:')
    {
        mask = mask.slice(4);
        utc = true;
        if (maskSlice === 'GMT:') gmt = true;
    }

    var prefix = utc ? 'getUTC' : 'get',
        d = date[prefix + 'Date'](),
        D = date[prefix + 'Day'](),
        m = date[prefix + 'Month'](),
        y = date[prefix + 'FullYear'](),
        H = date[prefix + 'Hours'](),
        M = date[prefix + 'Minutes'](),
        s = date[prefix + 'Seconds'](),
        L = date[prefix + 'Milliseconds'](),
        o = utc ? 0 : date.getTimezoneOffset(),
        flags = {
            d: d,
            dd: padZero(d),
            ddd: exports.i18n.dayNames[D],
            dddd: exports.i18n.dayNames[D + 7],
            m: m + 1,
            mm: padZero(m + 1),
            mmm: exports.i18n.monthNames[m],
            mmmm: exports.i18n.monthNames[m + 12],
            yy: toStr(y).slice(2),
            yyyy: y,
            h: H % 12 || 12,
            hh: padZero(H % 12 || 12),
            H: H,
            HH: padZero(H),
            M: M,
            MM: padZero(M),
            s: s,
            ss: padZero(s),
            l: padZero(L, 3),
            L: padZero(Math.round(L / 10)),
            t: H < 12 ? 'a'  : 'p',
            tt: H < 12 ? 'am' : 'pm',
            T: H < 12 ? 'A'  : 'P',
            TT: H < 12 ? 'AM' : 'PM',
            Z: gmt ? 'GMT' : utc ? 'UTC' : (toStr(date).match(regTimezone) || ['']).pop().replace(regTimezoneClip, ''),
            o: (o > 0 ? '-' : '+') + padZero(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
            S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
        };

    return mask.replace(regToken, function (match)
    {
        if (match in flags) return flags[match];

        return match.slice(1, match.length - 1);
    });
}

function padZero(str, len)
{
    return lpad(toStr(str), len || 2, '0');
}

var regToken = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,
    regTimezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    regNum = /\d/,
    regTimezoneClip = /[^-+\dA-Z]/g;

exports.masks = {
    'default': 'ddd mmm dd yyyy HH:MM:ss',
    'shortDate': 'm/d/yy',
    'mediumDate': 'mmm d, yyyy',
    'longDate': 'mmmm d, yyyy',
    'fullDate': 'dddd, mmmm d, yyyy',
    'shortTime': 'h:MM TT',
    'mediumTime': 'h:MM:ss TT',
    'longTime': 'h:MM:ss TT Z',
    'isoDate': 'yyyy-mm-dd',
    'isoTime': 'HH:MM:ss',
    'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
};

exports.i18n = {
    dayNames: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
};
