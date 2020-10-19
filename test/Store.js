let store;

beforeEach(function() {
    store = new Store({
        a: 1,
        b: 2,
        c: 3
    });
});

it('set', function() {
    store.on('change', onChange);
    expect(store.get('a')).to.equal(1);
    store.set('a', 2);
    expect(store.get('a')).to.equal(2);
    store.off('change', onChange);

    function onChange(key, newVal, oldVal) {
        expect(key).to.equal('a');
        expect(newVal).to.equal(2);
        expect(oldVal).to.equal(1);
    }

    expect(store.get('b')).to.equal(2);
    expect(store.get('c')).to.equal(3);
    store.set({
        b: 3,
        c: 4
    });
    expect(store.get('b')).to.equal(3);
    expect(store.get('c')).to.equal(4);
});

it('get', function() {
    expect(store.get('a')).to.equal(1);
    expect(store.get(['b', 'c'])).to.eql({
        b: 2,
        c: 3
    });
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
    expect(data).to.eql({
        a: 1,
        b: 2,
        c: 3
    });
});
