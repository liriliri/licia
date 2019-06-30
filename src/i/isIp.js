/* Check if value is an IP address.
 *
 * |Name  |Type   |Desc                          |
 * |------|-------|------------------------------|
 * |str   |string |String to check               |
 * |return|boolean|True if value is an IP address|
 *
 * ### v4
 *
 * Check if value is an IPv4 address.
 *
 * ### v6
 *
 * Check if value is an IPv6 address.
 */

/* example
 * isIp('192.168.191.1'); // -> true
 * isIp('1:2:3:4:5:6:7:8'); // -> true
 * isIp('test'); // -> false
 * isIp.v4('192.168.191.1'); // -> true
 * isIp.v6('1:2:3:4:5:6:7:8'); // -> true
 */

/* module
 * env: all
 * test: all
 * since: 1.5.1
 */

/* typescript
 * export declare namespace isIp {
 *     function v4(str: string): boolean;
 *     function v6(str: string): boolean;
 * }
 * export declare function isIp(str: string): boolean;
 */

exports = str => {
    return exports.v4(str) || exports.v6(str);
};

// https://github.com/sindresorhus/ip-regex
const v4 =
    '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
const regV4 = new RegExp(`^${v4}$`);
const v6seg = '[a-fA-F\\d]{1,4}';
const v6 = [
    '(',
    `(?:${v6seg}:){7}(?:${v6seg}|:)|`,
    `(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|`,
    `(?:${v6seg}:){5}(?::${v4}|(:${v6seg}){1,2}|:)|`,
    `(?:${v6seg}:){4}(?:(:${v6seg}){0,1}:${v4}|(:${v6seg}){1,3}|:)|`,
    `(?:${v6seg}:){3}(?:(:${v6seg}){0,2}:${v4}|(:${v6seg}){1,4}|:)|`,
    `(?:${v6seg}:){2}(?:(:${v6seg}){0,3}:${v4}|(:${v6seg}){1,5}|:)|`,
    `(?:${v6seg}:){1}(?:(:${v6seg}){0,4}:${v4}|(:${v6seg}){1,6}|:)|`,
    `(?::((?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))`,
    ')(%[0-9a-zA-Z]{1,})?'
].join('');
const regV6 = new RegExp(`^${v6}$`);

exports.v4 = str => regV4.test(str);
exports.v6 = str => regV6.test(str);
