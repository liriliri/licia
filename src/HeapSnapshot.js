/* V8 heap snapshot manipulator.
 *
 * ### constructor
 *
 * |Name   |Desc            |
 * |-------|----------------|
 * |profile|Profile to parse|
 *
 * ### nodes
 *
 * Parsed nodes.
 *
 * ### edges
 *
 * Parsed edges.
 */

/* example
 * const fs = require('fs');
 * const data = fs.readFileSync('path/to/heapsnapshot', 'utf8');
 * const heapSnapshot = new HeapSnapshot(data);
 * let totalSize = 0;
 * heapSnapshot.nodes.forEach(node => (totalSize += node.selfSize));
 * console.log(totalSize);
 */

/* module
 * env: all
 * test: node
 * since: 1.31.0
 */

/* typescript
 * export declare class HeapSnapshot {
 *     nodes: LinkedList;
 *     edges: LinkedList;
 *     constructor(profile: any);
 * }
 */

_('Class toBool camelCase LinkedList isStr each map');

exports = Class({
    initialize: function HeapSnapshot(profile) {
        if (isStr(profile)) {
            profile = JSON.parse(profile);
        }

        this.nodes = new LinkedList();
        this.edges = new LinkedList();

        const snapshot = profile.snapshot;
        const meta = snapshot.meta;
        this.nodeFields = map(meta.node_fields, camelCase);
        this.nodeTypes = meta.node_types[this.nodeFields.indexOf('type')];
        this.edgeFields = map(meta.edge_fields, camelCase);
        this.edgeTypes = meta.edge_types[this.edgeFields.indexOf('type')];

        this._init(profile);
    },
    _init(profile) {
        const { nodes, edges, strings } = profile;
        const { nodeFields, edgeFields } = this;

        const curEdgeIdx = 0;
        const nodeFieldCount = nodeFields.length;
        const edgeFieldCount = edgeFields.length;

        const nodeMap = {};
        for (let i = 0, len = nodes.length; i < len; i += nodeFieldCount) {
            const node = new Node(this);
            node.init(nodes.slice(i, i + nodeFieldCount), strings);
            this.nodes.push(node);
            nodeMap[i] = node;
        }
        this.nodes.forEach(node => {
            const edgeCount = node.edgeCount;
            delete node.edgeCount;
            for (
                let i = curEdgeIdx;
                i < curEdgeIdx + edgeCount * edgeFieldCount;
                i += edgeFieldCount
            ) {
                const edge = new Edge(this, node);
                edge.init(edges.slice(i, i + edgeFieldCount), strings, nodeMap);
                this.edges.push(edge);
            }
        });
    }
});

const Node = Class({
    initialize: function Node(heapSnapshot) {
        this._heapSnapshot = heapSnapshot;
    },
    init(fields, strings) {
        const heapSnapshot = this._heapSnapshot;
        const { nodeFields, nodeTypes } = heapSnapshot;

        each(nodeFields, (field, idx) => {
            let val = fields[idx];
            switch (field) {
                case 'name':
                    val = strings[val];
                    break;
                case 'detachedness':
                    val = toBool(val);
                    break;
                case 'type':
                    val = nodeTypes[val];
                    break;
            }
            this[field] = val;
        });
    }
});

const Edge = Class({
    initialize: function Edge(heapSnapshot, fromNode) {
        this._heapSnapshot = heapSnapshot;
        this.fromNode = fromNode;
    },
    init(fields, strings, nodeMap) {
        const heapSnapshot = this._heapSnapshot;
        const { edgeFields, edgeTypes } = heapSnapshot;

        each(edgeFields, (field, idx) => {
            let val = fields[idx];
            switch (field) {
                case 'nameOrIndex':
                    val = strings[val];
                    break;
                case 'type':
                    val = edgeTypes[val];
                    break;
                case 'toNode':
                    val = nodeMap[val];
                    break;
            }
            this[field] = val;
        });
    }
});
