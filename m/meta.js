/* Document meta manipulation, turn name and content into key value pairs.
 *
 * Get meta content with given name. If name is omitted, all pairs will be return.
 * 
 * |Name  |Type        |Desc        |
 * |------|------------|------------|
 * |[name]|string array|Meta name   |
 * |return|string      |Meta content|
 * 
 * Set meta content.
 * 
 * |Name   |Type  |Desc        |
 * |-------|------|------------|
 * |name   |string|Meta name   |
 * |content|string|Meta content|
 * 
 * |Name |Type  |Desc                        |
 * |-----|------|----------------------------|
 * |metas|object|Object of name content pairs|
 * 
 * ### remove
 * 
 * Remove metas.
 * 
 * |Name|Type        |Desc     |
 * |----|------------|---------|
 * |name|string array|Meta name|
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
 * test: browser
 */

/* typescript
 * export declare function meta(): {}
 * export declare function meta(key: string): string
 * export declare function meta(keys: string[]): {}
 * export declare function meta(key, value): void
 * export declare function meta(pairs: {}): void
 */

_('each isStr isUndef contain isArr isObj toArr');

function exports(name, content) {
    if (isUndef(name)) return getAllMeta();

    var isGetter = (isStr(name) && isUndef(content)) || isArr(name);
    if (isGetter) return getMeta(name);

    var metas = name;
    if (!isObj(metas)) {
        metas = {};
        metas[name] = content;
    }
    setMeta(metas);
}

exports.remove = function(nameList) {
    nameList = toArr(nameList);

    each(nameList, function(name) {
        var meta = selectMeta(name);
        if (meta) doc.head.removeChild(meta);
    });
};

var doc = document;

function getAllMeta() {
    var ret = {};

    metaEach(function(name, content) {
        ret[name] = content;
    });

    return ret;
}

function getMeta(name) {
    if (isStr(name)) {
        var meta = selectMeta(name);

        if (meta) return meta.getAttribute('content');
    } else {
        var ret = {};

        metaEach(function(key, val) {
            if (contain(name, key)) ret[key] = val;
        });

        return ret;
    }
}

function setMeta(metas) {
    each(metas, function(content, name) {
        var meta = selectMeta(name);
        if (meta) return meta.setAttribute('content', content);

        meta = doc.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        doc.head.appendChild(meta);
    });
}

function metaEach(fn) {
    var metaList = doc.querySelectorAll('meta');

    each(metaList, function(meta) {
        var name = meta.getAttribute('name'),
            content = meta.getAttribute('content');

        if (!name || !content) return;

        fn(name, content);
    });
}

function selectMeta(name) {
    return doc.querySelector('meta[name="' + name + '"]');
}
