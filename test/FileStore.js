const path = require('path');
const fs = require('fs');

const sleep = util.sleep;

it('basic', async function() {
    const p = path.resolve(__dirname, './fileStore.json');
    writeFile(p, '{licia}');

    let store = new FileStore(p, {
        a: 1,
        b: 2,
        c: 3
    });

    store.set('c', 4);
    await sleep(500);
    expect(readFile(p)).to.eql({
        a: 1,
        b: 2,
        c: 4
    });

    store.clear();
    await sleep(500);
    expect(fs.existsSync(p)).to.be.false;

    writeFile(p, '"licia"');
    store = new FileStore(p, {
        a: 1
    });
    await sleep(500);
    expect(readFile(p)).to.eql({ a: 1 });

    function readFile(p) {
        return JSON.parse(fs.readFileSync(p, 'utf8'));
    }

    function writeFile(p, data) {
        fs.writeFileSync(p, data, 'utf8');
    }
});
