/* V8 heap snapshot manipulator.
 */

/* example
 * const fs = require('fs');
 * const data = fs.readFileSync('path/to/heapsnapshot', 'utf8');
 * const heapSnapshot = new HeapSnapshot(data);
 * heapSnapshot.getStatistics();
 */

/* module
 * env: all
 * test: manual
 */

/* typescript
 * export declare class HeapSnapshot {
 *     nodes: LinkedList;
 *     edges: LinkedList;
 *     constructor(profile: any);
 *     getStatistics(): any;
 * }
 */

_('Class toBool camelCase LinkedList isStr each');

exports = Class({
    initialize: function HeapSnapshot(profile) {
        if (isStr(profile)) {
            profile = JSON.parse(profile);
        }

        this.nodes = new LinkedList();
        this.edges = new LinkedList();

        const snapshot = profile.snapshot;
        const meta = snapshot.meta;
        this.nodeFields = meta.node_fields;
        this.nodeTypes = meta.node_types[this.nodeFields.indexOf('type')];
        this.edgeFields = meta.edge_fields;
        this.edgeTypes = meta.edge_types[this.edgeFields.indexOf('type')];

        this._init(profile);
    },
    getStatistics() {
        const total = 0;
        const jsArrays = 0;
        const typeArrays = 0;
        const code = 0;
        const strings = 0;
        const systemObjects = 0;

        /* this.nodes.forEach(node => {
            const { type, selfSize } = node;
            if (type === 'code') {
                code += selfSize;
            } else if (contain(['string', 'concatenated string', 'sliced string'], type)) {
                strings += selfSize;
            }
            total += selfSize;
        }); */

        return {
            code,
            strings,
            jsArrays,
            typeArrays,
            systemObjects,
            total
        };
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
            this[camelCase(field)] = val;
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
                case 'name_or_index':
                    val = strings[val];
                    break;
                case 'type':
                    val = edgeTypes[val];
                    break;
                case 'to_node':
                    val = nodeMap[val];
                    break;
            }
            this[camelCase(field)] = val;
        });
    }
});
