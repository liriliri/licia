/* Format datetime with *** time ago statement.
 *
 * |Name        |Desc                     |
 * |------------|-------------------------|
 * |date        |Date to calculate        |
 * |now=new Date|Current date             |
 * |return      |Formatted time ago string|
 */

/* example
 * const now = new Date().getTime();
 * timeAgo(now - 1000 * 6); // -> just now
 * timeAgo(now - 1000 * 15); // -> 15 seconds ago
 * timeAgo(now + 1000 * 60 * 15); // -> in 15 minutes
 * timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
 * // Replace i18n to support other languages.
 * timeAgo.i18n = [
 *     ['刚刚', '马上'],
 *     ['%s 秒前', '%s 秒后'],
 *     ['1 分钟前', '1 分钟后'],
 *     ['%s 分钟前', '%s 分钟后'],
 *     ['1 小时前', '1 小时后'],
 *     ['%s 小时前', '%s 小时后'],
 *     ['1 天前', '1 天后'],
 *     ['%s 天前', '%s 天后'],
 *     ['1 周前', '1 周后'],
 *     ['%s 周前', '%s 周后'],
 *     ['1 个月前', '1 个月后'],
 *     ['%s 个月前', '%s 个月后'],
 *     ['1 年前', '1 年后'],
 *     ['%s 年前', '%s 年后']
 * ];
 * timeAgo(now - 1000 * 15); // -> 15 秒前
 */

/* module
 * env: all
 */

/* typescript
 * export declare namespace timeAgo {
 *     interface ITimeAgo {
 *         (date: Date | number, now?: Date | number): string;
 *         i18n: string[][];
 *     }
 * }
 * export declare const timeAgo: timeAgo.ITimeAgo;
 */

_('isDate toInt');

exports = function(date, now) {
    if (!isDate(date)) date = new Date(date);

    now = now || new Date();
    if (!isDate(now)) now = new Date(now);

    let diff = (now - date) / 1000;
    let i = 0;
    const ago = diff > 0;

    diff = Math.abs(diff);

    while (diff >= secArr[i] && i < secArrLen) {
        diff /= secArr[i];
        i++;
    }

    diff = toInt(diff);
    i *= 2;

    if (diff > (i === 0 ? 9 : 1)) i += 1;

    return format(diff, i, ago);
};

const secArr = [60, 60, 24, 7, 365 / 7 / 12, 12];
const secArrLen = secArr.length;

function format(diff, i, ago) {
    return exports.i18n[i][ago ? 0 : 1].replace('%s', diff);
}

exports.i18n = [
    ['just now', 'right now'],
    ['%s seconds ago', 'in %s seconds'],
    ['1 minute ago', 'in 1 minute'],
    ['%s minutes ago', 'in %s minutes'],
    ['1 hour ago', 'in 1 hour'],
    ['%s hours ago', 'in %s hours'],
    ['1 day ago', 'in 1 day'],
    ['%s days ago', 'in %s days'],
    ['1 week ago', 'in 1 week'],
    ['%s weeks ago', 'in %s weeks'],
    ['1 month ago', 'in 1 month'],
    ['%s months ago', 'in %s months'],
    ['1 year ago', 'in 1 year'],
    ['%s years ago', 'in %s years']
];
