/* Parse and stringify data urls.
 *
 * ### parse
 *
 * Parse a data url.
 *
 * |Name   |Desc           |
 * |-------|---------------|
 * |dataUrl|Data url string|
 * |return |Parsed object  |
 *
 * ### stringify
 *
 * Stringify an object into a data url.
 *
 * |Name   |Desc             |
 * |-------|-----------------|
 * |data   |Data to stringify|
 * |mime   |Mime type        |
 * |options|Stringify options|
 * |return |Data url string  |
 *
 * ### options
 *
 * |Name       |Desc             |
 * |-----------|-----------------|
 * |base64=true|Whether is base64|
 * |charset    |Charset          |
 */

/* example
 * dataUrl.parse('data:,Hello%2C%20World%21'); // -> {data: 'Hello, World!', mime: 'text/plain', charset: '', base64: false}
 * dataUrl.stringify('Hello, World!', 'text/plain'); // -> 'data:,Hello%2C%20World%21'
 */

/* module
 * env: all
 */

/* typescript
 * export declare const dataUrl: {
 *     parse(
 *         dataUrl: string
 *     ): { data: string; mime: string; charset: string; base64: boolean } | null;
 *     stringify(
 *         data: any,
 *         mime: string,
 *         options?: { base64?: boolean; charset?: string }
 *     ): string;
 * };
 */

_(
    'isDataUrl trim endWith startWith contain decodeUriComponent defaults isStr convertBin'
);

exports = {
    parse(dataUrl) {
        if (!isDataUrl(dataUrl)) {
            return null;
        }

        dataUrl = dataUrl.slice('data:'.length);

        const commaIdx = dataUrl.indexOf(',');
        let mime = trim(dataUrl.slice(0, commaIdx));
        let data = trim(dataUrl.slice(commaIdx + 1));
        let base64 = false;
        if (endWith(mime, ';base64')) {
            base64 = true;
            mime = mime.slice(0, -';base64'.length);
        }

        let charset = '';
        if (contain(mime, 'charset=')) {
            charset = mime.split('charset=')[1];
            mime = mime.split(';')[0];
        }

        if (!mime) {
            mime = 'text/plain';
        }

        if (!base64 && startWith(mime, 'text/') && contain(data, '%')) {
            data = decodeUriComponent(data);
        }

        return {
            data,
            mime,
            charset,
            base64
        };
    },
    stringify(data, mime, options = {}) {
        defaults(options, {
            base64: true,
            charset: ''
        });

        let result = 'data:' + mime;

        if (options.charset && startWith(mime, 'text/')) {
            result += ';charset=' + options.charset;
        }

        if (!isStr(data)) {
            data = convertBin(data, 'base64');
            options.base64 = true;
        }

        if (options.base64) {
            result += ';base64';
        } else if (startWith(mime, 'text/') || !mime) {
            data = encodeURIComponent(data);
        }

        return result + ',' + data;
    }
};
