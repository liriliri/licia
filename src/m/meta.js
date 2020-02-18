/* Document meta manipulation, turn name and content into key value pairs.
 *
 * Get meta content with given name. If name is omitted, all pairs will be return.
 *
 * |Name  |Desc        |
 * |------|------------|
 * |name  |Meta name   |
 * |return|Meta content|
 *
 * Set meta content.
 *
 * |Name   |Desc        |
 * |-------|------------|
 * |name   |Meta name   |
 * |content|Meta content|
 *
 * |Name |Desc                        |
 * |-----|----------------------------|
 * |metas|Object of name content pairs|
 *
 * ### remove
 *
 * Remove metas.
 *
 * |Name|Desc     |
 * |----|---------|
 * |name|Meta name|
 */

/* example
 * // <meta name="a" content="1"/> <meta name="b" content="2"/> <meta name="c" content="3"/>
 * meta(); // -> {a: '1', b: '2', c: '3'}
 * meta('a'); // -> '1'
 * meta(['a', 'c']); // -> {a: '1', c: '3'}
 * meta('d', '4');
 * meta({
 *     d: '5',
 *     e: '6',
 *     f: '7'
 * });
 * meta.remove('d');
 * meta.remove(['e', 'f']);
 */

/* module
 * env: browser
 */

/* typescript
 * export declare namespace meta {
 *     function remove(nameList: string | string[]): void;
 * }
 * export declare function meta(): {};
 * export declare function meta(key: string): string;
 * export declare function meta(keys: string[]): {};
 * export declare function meta(key, value): void;
 * export declare function meta(pairs: {}): void;
 */

_('each isStr isUndef contain isArr isObj toArr');

exports = function(name, content) {
    if (isUndef(name)) return getAllMeta();

    const isGetter = (isStr(name) && isUndef(content)) || isArr(name);
    if (isGetter) return getMeta(name);

    let metas = name;
    if (!isObj(metas)) {
        metas = {};
        metas[name] = content;
    }
    setMeta(metas);
};

exports.remove = function(nameList) {
    nameList = toArr(nameList);

    each(nameList, function(name) {
        const meta = selectMeta(name);
        if (meta) doc.head.removeChild(meta);
    });
};

const doc = document;

function getAllMeta() {
    const ret = {};

    metaEach(function(name, content) {
        ret[name] = content;
    });

    return ret;
}

function getMeta(name) {
    if (isStr(name)) {
        const meta = selectMeta(name);

        if (meta) return meta.getAttribute('content');
    } else {
        const ret = {};

        metaEach(function(key, val) {
            if (contain(name, key)) ret[key] = val;
        });

        return ret;
    }
}

function setMeta(metas) {
    each(metas, function(content, name) {
        let meta = selectMeta(name);
        if (meta) return meta.setAttribute('content', content);

        meta = doc.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        doc.head.appendChild(meta);
    });
}

function metaEach(fn) {
    const metaList = doc.querySelectorAll('meta');

    each(metaList, function(meta) {
        const name = meta.getAttribute('name');
        const content = meta.getAttribute('content');

        if (!name || !content) return;

        fn(name, content);
    });
}

function selectMeta(name) {
    return doc.querySelector('meta[name="' + name + '"]');
}
