/* Morph a dom tree to match a target dom tree.
 *
 * |Name  |Type              |
 * |------|------------------|
 * |from  |Node to morph     |
 * |to    |Node to be morphed|
 * |return|Morphed node      |
 */

/* example
 * const el1 = document.createElement('div');
 * el1.className = 'test';
 * const el2 = document.createElement('div');
 * el2.className = 'licia';
 * morphDom(el1, el2);
 * console.log(el1.className); // -> 'licia'
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function morphDom(from: Node, to: Node | string): Node;
 */

_('toEl isStr h isNull each');

// https://github.com/patrick-steele-idem/morphdom
exports = function(from, to) {
    if (isStr(to)) {
        to = toEl(to);
    }

    let morphed = from;
    const morphedType = morphed.nodeType;
    const toType = to.nodeType;

    if (morphedType === toType) {
        if (morphedType === ELEMENT_NODE) {
            if (morphed.nodeName !== to.nodeName) {
                morphed = h(to.nodeName);
                moveChildren(from, morphed);
            }
        } else if (morphedType === TEXT_NODE || morphedType === COMMENT_NODE) {
            if (morphed.nodeValue !== to.nodeValue) {
                morphed.nodeValue = to.nodeValue;
            }
            return morphed;
        }
    } else {
        morphed = to;
    }

    if (morphed !== to) {
        morphEl(morphed, to);
    }

    if (from.parentNode) {
        from.parentNode.replaceChild(morphed, from);
    }

    return morphed;
};

const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;

function morphEl(from, to) {
    morphAttrs(from, to);

    morphChildren(from, to);
}

function morphAttrs(from, to) {
    let attrs = to.attributes;

    each(attrs, ({ name, value }) => {
        const fromVal = from.getAttribute(name);
        if (fromVal !== value) {
            from.setAttribute(name, value);
        }
    });

    attrs = from.attributes;

    const removedAttrNames = [];
    each(attrs, ({ name }) => {
        if (isNull(to.getAttribute(name))) {
            removedAttrNames.push(name);
        }
    });
    each(removedAttrNames, name => from.removeAttribute(name));
}

function morphChildren(from, to) {
    let curToChild = to.firstChild;
    let curFromChild = from.firstChild;
    let toNextSibling;
    let fromNextSibling;

    outer: while (curToChild) {
        toNextSibling = curToChild.nextSibling;

        while (curFromChild) {
            fromNextSibling = curFromChild.nextSibling;

            let isCompatible = false;
            const curFromType = curFromChild.nodeType;
            const curToType = curToChild.nodeType;
            if (curFromType === curToType) {
                if (curFromType === ELEMENT_NODE) {
                    if (curFromChild.nodeName === curToChild.nodeName) {
                        isCompatible = true;
                        morphEl(curFromChild, curToChild);
                    }
                } else if (
                    curFromType === TEXT_NODE ||
                    curFromType === COMMENT_NODE
                ) {
                    isCompatible = true;
                    if (curFromChild.nodeValue !== curToChild.nodeValue) {
                        curFromChild.nodeValue = curToChild.nodeValue;
                    }
                }
            }

            if (isCompatible) {
                curToChild = toNextSibling;
                curFromChild = fromNextSibling;
                continue outer;
            }

            from.removeChild(curFromChild);

            curFromChild = fromNextSibling;
        }

        from.appendChild(curToChild);

        curFromChild = fromNextSibling;
        curToChild = toNextSibling;
    }

    if (curFromChild) {
        while (curFromChild) {
            fromNextSibling = curFromChild.nextSibling;

            from.removeChild(curFromChild);

            curFromChild = fromNextSibling;
        }
    }
}

function moveChildren(from, to) {
    let curChild = from.firstChild;
    while (curChild) {
        const nextChild = curChild.nextSibling;
        to.appendChild(curChild);
        curChild = nextChild;
    }
}
