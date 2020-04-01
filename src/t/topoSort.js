/* Topological sorting algorithm.
 *
 * |Name  |Desc        |
 * |------|------------|
 * |edges |Dependencies|
 * |return|Sorted order|
 */

/* example
 * topoSort([
 *     [1, 2],
 *     [1, 3],
 *     [3, 2]
 * ]); // -> [1, 3, 2]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function topoSort(edges: any[]): any[];
 */

exports = function(edges) {
    return sort(uniqueNodes(edges), edges);
};

function uniqueNodes(arr) {
    const ret = [];

    for (let i = 0, len = arr.length; i < len; i++) {
        const edge = arr[i];
        if (ret.indexOf(edge[0]) < 0) ret.push(edge[0]);
        if (ret.indexOf(edge[1]) < 0) ret.push(edge[1]);
    }

    return ret;
}

function sort(nodes, edges) {
    let cursor = nodes.length;
    const sorted = new Array(cursor);
    const visited = {};
    let i = cursor;

    while (i--) {
        if (!visited[i]) visit(nodes[i], i, []);
    }

    function visit(node, i, predecessors) {
        if (predecessors.indexOf(node) >= 0) {
            throw new Error('Cyclic dependency: ' + JSON.stringify(node));
        }

        if (visited[i]) return;
        visited[i] = true;

        const outgoing = edges.filter(function(edge) {
            return edge[0] === node;
        });

        /* eslint-disable no-cond-assign */
        if ((i = outgoing.length)) {
            const preds = predecessors.concat(node);
            do {
                const child = outgoing[--i][1];
                visit(child, nodes.indexOf(child), preds);
            } while (i);
        }

        sorted[--cursor] = node;
    }

    return sorted;
}
