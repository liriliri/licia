/* Highlight code.
 *
 * |Name   |Desc                        |
 * |-------|----------------------------|
 * |str    |Code string                 |
 * |lang=js|Language, js, html or css   |
 * |style  |Keyword highlight style     |
 * |return |Highlighted html code string|
 *
 * Available styles:
 *
 * comment, string, number, keyword, operator
 */

/* example
 * highlight('const a = 5;', 'js', {
 *     keyword: 'color:#569cd6;'
 * }); // -> '<span class="keyword" style="color:#569cd6;">const</span> a <span class="operator" style="color:#994500;">=</span> <span class="number" style="color:#0086b3;">5</span>;'
 */

/* module
 * env: all
 * since: 1.5.6
 */

/* typescript
 * export declare function highlight(
 *     str: string,
 *     lang?: string,
 *     style?: {
 *         comment?: string;
 *         string?: string;
 *         number?: string;
 *         keyword?: string;
 *         operator?: string;
 *     }
 * ): string;
 */

_('each defaults');

// https://github.com/trentrichardson/jQuery-Litelighter
exports = function(str, lang = 'js', style = {}) {
    defaults(style, defStyle);

    str = str.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    lang = language[lang];

    let subLangSi = 0;
    const subLangs = [];

    each(lang, val => {
        if (!val.language) return;

        str = str.replace(val.re, function($1, $2) {
            if (!$2) {
                return $1;
            }

            subLangs[subLangSi++] = exports($2, val.language, style);
            return $1.replace($2, '___subtmpl' + (subLangSi - 1) + '___');
        });
    });

    each(lang, (val, key) => {
        if (language[val.language]) return;

        str = str.replace(val.re, '___' + key + '___$1___end' + key + '___');
    });

    const levels = [];

    str = str.replace(/___(?!subtmpl)\w+?___/g, function($0) {
        const end = $0.substr(3, 3) === 'end',
            tag = (!end ? $0.substr(3) : $0.substr(6)).replace(/_/g, ''),
            lastTag = levels.length > 0 ? levels[levels.length - 1] : null;

        if (
            !end &&
            (lastTag == null ||
                tag == lastTag ||
                (lastTag != null &&
                    lang[lastTag] &&
                    lang[lastTag].embed != undefined &&
                    lang[lastTag].embed.indexOf(tag) > -1))
        ) {
            levels.push(tag);

            return $0;
        } else if (end && tag == lastTag) {
            levels.pop();

            return $0;
        }

        return '';
    });

    each(lang, (val, key) => {
        const s = style[val.style] ? ` style="${style[val.style]}"` : '';

        str = str
            .replace(new RegExp('___end' + key + '___', 'g'), '</span>')
            .replace(
                new RegExp('___' + key + '___', 'g'),
                `<span class="${val.style}"${s}>`
            );
    });

    each(lang, val => {
        if (!val.language) return;

        str = str.replace(/___subtmpl\d+___/g, function($tmpl) {
            const i = parseInt($tmpl.replace(/___subtmpl(\d+)___/, '$1'), 10);

            return subLangs[i];
        });
    });

    return str;
};

const defStyle = {
    comment: 'color:#63a35c;',
    string: 'color:#183691;',
    number: 'color:#0086b3;',
    keyword: 'color:#a71d5d;',
    operator: 'color:#994500;'
};

const language = {};

language.js = {
    comment: { re: /(\/\/.*|\/\*([\s\S]*?)\*\/)/g, style: 'comment' },
    string: { re: /(('.*?')|(".*?"))/g, style: 'string' },
    numbers: { re: /(-?(\d+|\d+\.\d+|\.\d+))/g, style: 'number' },
    keywords: {
        re: /(?:\b)(function|for|foreach|while|if|else|elseif|switch|break|as|return|this|class|self|default|var|const|let|false|true|null|undefined)(?:\b)/gi,
        style: 'keyword'
    },
    operator: {
        re: /(\+|-|\/|\*|%|=|&lt;|&gt;|\||\?|\.)/g,
        style: 'operator'
    }
};

language.html = {
    comment: { re: /(&lt;!--([\s\S]*?)--&gt;)/g, style: 'comment' },
    tag: {
        re: /(&lt;\/?\w(.|\n)*?\/?&gt;)/g,
        style: 'keyword',
        embed: ['string']
    },
    string: language.js.string,
    css: {
        re: /(?:&lt;style.*?&gt;)([\s\S]*)?(?:&lt;\/style&gt;)/gi,
        language: 'css'
    },
    script: {
        re: /(?:&lt;script.*?&gt;)([\s\S]*?)(?:&lt;\/script&gt;)/gi,
        language: 'js'
    }
};

language.css = {
    comment: language.js.comment,
    string: language.js.string,
    numbers: {
        re: /((-?(\d+|\d+\.\d+|\.\d+)(%|px|em|pt|in)?)|#[0-9a-fA-F]{3}[0-9a-fA-F]{3})/g,
        style: 'number'
    },
    keywords: { re: /(@\w+|:?:\w+|[a-z-]+:)/g, style: 'keyword' }
};
