/* Normalize phone numbers into E.164 format.
 *
 * |Name   |Type  |Desc              |
 * |-------|------|------------------|
 * |phone  |string|Phone to normalize|
 * |options|object|Normalize options |
 * |return |string|Normalized phone  |
 *
 * Available options:
 *
 * |Name             |Type   |Desc                                 |
 * |-----------------|-------|-------------------------------------|
 * |countryCode      |number |Country code                         |
 * |trunkPrefix=false|boolean|True if local format has trunk prefix|
 */

/* example
 * normalizePhone('13512345678', {
 *     countryCode: 86
 * }); // -> '+8613512345678'
 * normalizePhone('(415) 555-2671', {
 *     countryCode: 1
 * }); // -> '+14155552671'
 * normalizePhone('020 7183 8750', {
 *     countryCode: 44,
 *     trunkPrefix: true
 * }); // -> '+442071838750'
 */

/* module
 * env: all
 * since: 1.13.0
 */

/* typescript
 * export declare namespace normalizePhone {
 *     interface IOptions {
 *         countryCode: number;
 *         trunkPrefix?: boolean;
 *     }
 * }
 * export declare function normalizePhone(
 *     phone: string,
 *     options: normalizePhone.IOptions
 * ): string;
 */

_('trim');

exports = function(phone, options) {
    phone = trim(phone);
    const { countryCode, trunkPrefix = false } = options;

    const plusSign = regPlusSign.test(phone);
    phone = phone.replace(regNotDigit, '');

    if (plusSign) {
        phone = phone.replace(new RegExp(`^${countryCode}`), '');
    }

    if (trunkPrefix) {
        phone = phone.replace(regTrunkPrefix, '');
    }

    return `+${countryCode + phone}`;
};

const regPlusSign = /^\+/;
const regNotDigit = /\D/g;
const regTrunkPrefix = /^\d/;
