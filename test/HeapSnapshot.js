const zlib = require('zlib');
const path = require('path');

const fs = util.fs;
const promisify = util.promisify;
const vlq = util.vlq;
const gunzip = promisify(zlib.gunzip);

const samplePath = path.resolve(process.cwd(), 'test/HeapSnapshot.gz');

let data, heapSnapshot;
before(async function() {
    data = await fs.readFile(samplePath);
    data = await gunzip(data);
    data = data.toString('utf8');
    data = JSON.parse(data);
    data.nodes = vlq.decode(data.nodes);
    data.edges = vlq.decode(data.edges);
    heapSnapshot = new HeapSnapshot(data);
});

it('basic', function() {
    expect(heapSnapshot.nodes.size).to.equal(31506);
    expect(heapSnapshot.edges.size).to.equal(119302);
});

it('statistics', function() {
    expect(heapSnapshot.getStatistics()).to.include({
        code: 0,
        strings: 0,
        jsArrays: 0,
        typeArrays: 0,
        systemObjects: 0,
        total: 0
    });
});
