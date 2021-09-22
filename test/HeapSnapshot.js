const zlib = require('zlib');
const path = require('path');

const fs = util.fs;
const promisify = util.promisify;
const gunzip = promisify(zlib.gunzip);

const samplePath = path.resolve(process.cwd(), 'test/HeapSnapshot.gz');

let data, heapSnapshot;
before(async function() {
    data = await fs.readFile(samplePath);
    data = await gunzip(data);
    data = data.toString('utf8');
    data = JSON.parse(data);
    heapSnapshot = new HeapSnapshot(data);
});

it('basic', function() {
    const { nodes, edges } = heapSnapshot;
    expect(nodes.size).to.equal(31506);
    expect(edges.size).to.equal(119302);
    const lastNode = nodes.tail.value;
    expect(lastNode).to.include({
        type: 'native',
        id: 2295779520,
        name: 'InternalNode',
        selfSize: 0,
        traceNodeId: 0,
        detachedness: false
    });
    const lastEdge = edges.tail.value;
    expect(lastEdge).to.include({
        type: 'element',
        nameOrIndex: ''
    });
});
