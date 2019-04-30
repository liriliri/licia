it('basic', () => {
    const cache = new Lru(50);
    cache.set('test', 'licia');
    cache.set('test1', 'licia1');
    cache.set('test2', 'licia2');
    expect(cache.get('test')).to.equal('licia');
    cache.remove('test');
    expect(cache.get('test')).to.be.undefined;
    cache.clear();
    expect(cache.get('test1')).to.be.undefined;
    expect(cache.get('test2')).to.be.undefined;
});

it('max', () => {
    const cache = new Lru(1);
    cache.set('test1', 'licia1');
    expect(cache.get('test1')).to.equal('licia1');
    cache.set('test2', 'licia2');
    expect(cache.get('test1')).to.be.undefined;
});

it('get', () => {
    const cache = new Lru(2);
    cache.set('test1', 'licia1');
    cache.set('test2', 'licia2');
    cache.get('test1');
    cache.set('test3', 'licia3');
    expect(cache.get('test1')).to.equal('licia1');
    expect(cache.get('test2')).to.be.undefined;
});
