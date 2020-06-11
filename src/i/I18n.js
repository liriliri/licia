/* Simple internationalization library.
 *
 * ### constructor
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |locale|Locale code  |
 * |langs |Language data|
 *
 * ### set
 *
 * Add language or append extra keys to existing language.
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |locale|Locale code  |
 * |lang  |Language data|
 *
 * ### locale
 *
 * Set default locale.
 *
 * |Name  |Desc       |
 * |------|-----------|
 * |locale|Locale code|
 *
 * ### t
 *
 * Get translation text.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |path  |Path of translation to get|
 * |data  |Data to pass in           |
 * |return|Translation text          |
 */

/* example
 * const i18n = new I18n('en', {
 *     en: {
 *         welcome: 'Hello, {{name}}!',
 *         curTime(data) {
 *             return 'Current time is ' + data.time;
 *         }
 *     },
 *     cn: {
 *         welcome: '你好，{{name}}！'
 *     }
 * });
 * i18n.set('cn', {
 *     curTime(data) {
 *         return '当前时间是 ' + data.time;
 *     }
 * });
 * i18n.t('welcome', { name: 'licia' }); // -> 'Hello, licia!'
 * i18n.locale('cn');
 * i18n.t('curTime', { time: '5:47 pm' }); // -> '当前时间是 5:47 pm'
 */

/* module
 * env: all
 */

/* typescript
 * export declare class I18n {
 *     constructor(locale: string, langs: types.PlainObj<any>);
 *     set(locale: string, lang: types.PlainObj<any>): void;
 *     t(path: string | string[], data?: types.PlainObj<any>): string;
 *     locale(locale: string): void;
 * }
 */

_('Class safeGet types extend strTpl isStr isFn');

exports = Class({
    initialize: function I18n(locale, langs) {
        this._locale = locale;
        this._langs = langs;
    },
    set(locale, lang) {
        if (this._langs[locale]) {
            extend(this._langs[locale], lang);
        } else {
            this._langs[locale] = lang;
        }
    },
    t(path, data) {
        let val = '';
        const lang = this._langs[this._locale];
        if (!lang) return '';

        val = safeGet(lang, path);
        if (data) {
            if (isStr(val)) {
                val = strTpl(val, data);
            } else if (isFn(val)) {
                val = val(data);
            }
        }

        return val || '';
    },
    locale(locale) {
        this._locale = locale;
    }
});
