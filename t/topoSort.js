/* Topological sorting algorithm.
 *
 * |Name  |Type |Desc        |
 * |------|-----|------------|
 * |edges |array|Dependencies|
 * |return|array|Sorted order|
 */

/* example
 * topoSort([[1, 2], [1, 3], [3, 2]]); // -> [1, 3, 2]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function topoSort(edges: any[]): any[]
 */

function exports(edges) {
    return sort(uniqueNodes(edges), edges);
}

function uniqueNodes(arr) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
        var edge = arr[i];
        if (ret.indexOf(edge[0]) < 0) ret.push(edge[0]);
        if (ret.indexOf(edge[1]) < 0) ret.push(edge[1]);
    }

    return ret;
}

function sort(nodes, edges) {
    var cursor = nodes.length,
        sorted = new Array(cursor),
        visited = {},
        i = cursor;

    while (i--) {
        if (!visited[i]) visit(nodes[i], i, []);
    }

    function visit(node, i, predecessors) {
        if (predecessors.indexOf(node) >= 0) {
            throw new Error('Cyclic dependency: ' + JSON.stringify(node));
        }

        if (visited[i]) return;
        visited[i] = true;

        var outgoing = edges.filter(function(edge) {
            return edge[0] === node;
        });

        /* eslint-disable no-cond-assign */
        if ((i = outgoing.length)) {
            var preds = predecessors.concat(node);
            do {
                var child = outgoing[--i][1];
                visit(child, nodes.indexOf(child), preds);
            } while (i);
        }

        sorted[--cursor] = node;
    }

    return sorted;
}
