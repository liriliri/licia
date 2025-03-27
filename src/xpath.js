/* Select elements using xpath or get element xpath, IE is not supported.
 *
 * Select elements using xpath.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |xpath |Xpath          |
 * |return|Target elements|
 *
 * Get element xpath.
 *
 * |Name     |Desc                                |
 * |---------|------------------------------------|
 * |el       |Element                             |
 * |optimized|Optimize the xpath, default is false|
 */

/* example
 * xpath('/html/body'); // -> [body]
 * xpath(document.body); // -> /html/body
 */

/* module
 * env: browser
 * since: 1.10.0
 */

/* typescript
 * export declare function xpath(xpath: string): HTMLElement[];
 * export declare function xpath(node: ChildNode, optimized?: boolean): string;
 */

_('isStr Class');

exports = function(xpath, optimized) {
    if (isStr(xpath)) {
        return findEl(xpath);
    } else {
        return getXpath(xpath, optimized);
    }
};

function findEl(xpath) {
    const ret = [];

    const nodesSnapshot = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );
    for (let i = 0; i < nodesSnapshot.snapshotLength; i++) {
        ret.push(nodesSnapshot.snapshotItem(i));
    }

    return ret;
}

// https://github.com/ChromeDevTools/devtools-frontend/blob/main/front_end/panels/elements/DOMPath.ts
function getXpath(node, optimized = false) {
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return '/';
    }

    const steps = [];
    let contextNode = node;
    while (contextNode) {
        const step = xPathValue(contextNode, optimized);
        if (!step) {
            break;
        }
        steps.push(step);
        if (step.optimized) {
            break;
        }
        contextNode = contextNode.parentNode;
    }

    steps.reverse();
    return (steps.length && steps[0].optimized ? '' : '/') + steps.join('/');
}

function xPathValue(node, optimized) {
    let ownValue;
    const ownIndex = xPathIndex(node);
    if (ownIndex === -1) {
        return null;
    }

    switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            if (optimized && node.getAttribute('id')) {
                return new Step(
                    '//*[@id="' + node.getAttribute('id') + '"]',
                    true
                );
            }
            ownValue = node.localName;
            break;
        case Node.ATTRIBUTE_NODE:
            ownValue = '@' + node.nodeName;
            break;
        case Node.TEXT_NODE:
        case Node.CDATA_SECTION_NODE:
            ownValue = 'text()';
            break;
        case Node.PROCESSING_INSTRUCTION_NODE:
            ownValue = 'processing-instruction()';
            break;
        case Node.COMMENT_NODE:
            ownValue = 'comment()';
            break;
        case Node.DOCUMENT_NODE:
            ownValue = '';
            break;
        default:
            ownValue = '';
            break;
    }

    if (ownIndex > 0) {
        ownValue += '[' + ownIndex + ']';
    }

    return new Step(ownValue, node.nodeType === Node.DOCUMENT_NODE);
}

function xPathIndex(node) {
    function areNodesSimilar(left, right) {
        if (left === right) {
            return true;
        }

        if (
            left.nodeType === Node.ELEMENT_NODE &&
            right.nodeType === Node.ELEMENT_NODE
        ) {
            return left.localName === right.localName;
        }

        if (left.nodeType === right.nodeType) {
            return true;
        }

        const leftType =
            left.nodeType === Node.CDATA_SECTION_NODE
                ? Node.TEXT_NODE
                : left.nodeType;
        const rightType =
            right.nodeType === Node.CDATA_SECTION_NODE
                ? Node.TEXT_NODE
                : right.nodeType;
        return leftType === rightType;
    }

    const siblings = node.parentNode ? node.parentNode.children : null;
    if (!siblings) {
        return 0;
    }
    let hasSameNamedElements;
    for (let i = 0; i < siblings.length; ++i) {
        if (areNodesSimilar(node, siblings[i]) && siblings[i] !== node) {
            hasSameNamedElements = true;
            break;
        }
    }
    if (!hasSameNamedElements) {
        return 0;
    }
    let ownIndex = 1;
    for (let i = 0; i < siblings.length; ++i) {
        if (areNodesSimilar(node, siblings[i])) {
            if (siblings[i] === node) {
                return ownIndex;
            }
            ++ownIndex;
        }
    }
    return -1;
}

const Step = Class({
    initialize(value, optimized) {
        this.value = value;
        this.optimized = optimized || false;
    },
    toString() {
        return this.value;
    }
});
