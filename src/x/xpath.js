/* Select elements using xpath, IE is not supported.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |xpath |string|Xpath          |
 * |return|array |Target elements|
 */

/* example
 * xpath('//html/body'); // -> [body]
 */

/* module
 * env: browser
 * test: browser
 * since: 1.10.0
 */

/* typescript
 * export declare function xpath(xpath: string): HTMLElement[];
 */

exports = function(xpath) {
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
};
