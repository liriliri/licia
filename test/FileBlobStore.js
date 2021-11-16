const path = require('path');

const buf1 = Buffer.from('1');
const buf2 = Buffer.from('2');
const buf3 = Buffer.from('3');
const buf4 = Buffer.from('4');

const p = path.resolve(__dirname, './fileBlobStore.blob');
const store = new FileBlobStore(p);

beforeEach(() => {
    store.clear();
    store.set({
        a: buf1,
        b: buf2,
        c: buf3
    });
});

it('set', function() {
    store.on('change', onChange);
    equalBuf(store.get('a'), buf1);
    store.set('a', buf2);
    equalBuf(store.get('a'), buf2);
    store.off('change', onChange);

    function onChange(key, newVal, oldVal) {
        expect(key).to.equal('a');
        equalBuf(newVal, buf2);
        equalBuf(oldVal, buf1);
    }

    equalBuf(store.get('b'), buf2);
    equalBuf(store.get('c'), buf3);
    store.set({
        b: buf3,
        c: buf4
    });
    equalBuf(store.get('b'), buf3);
    equalBuf(store.get('c'), buf4);
    store.off('change', onChange);
});

it('get', function() {
    equalBuf(store.get('a'), buf1);
    const { b, c } = store.get(['b', 'c']);
    equalBuf(b, buf2);
    equalBuf(c, buf3);
});

it('remove', function() {
    store.remove('a');
    expect(store.get('a')).to.be.an('undefined');
    store.remove(['b', 'c']);
    expect(store.get('b')).to.be.an('undefined');
    expect(store.get('c')).to.be.an('undefined');
});

it('clear', function() {
    store.clear();
    expect(store.get('a')).to.be.an('undefined');
    expect(store.get('b')).to.be.an('undefined');
    expect(store.get('c')).to.be.an('undefined');
});

it('each', function() {
    const data = {};
    store.each(function(val, key) {
        data[key] = val;
    });
    equalBuf(data.a, buf1);
    equalBuf(data.b, buf2);
    equalBuf(data.c, buf3);
});

it('save', function() {
    store.save();
    const newStore = new FileBlobStore(p);
    expect(newStore.get('c').equals(buf3)).to.be.true;
});

function equalBuf(buf1, buf2) {
    expect(buf1.equals(buf2)).to.be.true;
}
