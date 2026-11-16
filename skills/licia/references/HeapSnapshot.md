## HeapSnapshot

V8 heap snapshot manipulator.

<details>
<summary>Type Definition</summary>

```typescript
class HeapSnapshot {
    nodes: LinkedList;
    edges: LinkedList;
    constructor(profile: any);
}
```

</details>

### constructor

|Name   |Desc            |
|-------|----------------|
|profile|Profile to parse|

### nodes

Parsed nodes.

### edges

Parsed edges.

```javascript
const fs = require('fs');
const data = fs.readFileSync('path/to/heapsnapshot', 'utf8');
const heapSnapshot = new HeapSnapshot(data);
let totalSize = 0;
heapSnapshot.nodes.forEach(node => (totalSize += node.selfSize));
console.log(totalSize);
```
