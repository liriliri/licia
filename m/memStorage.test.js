it('get and set items', function ()
{
    expect(memStorage.length).to.equal(0);
    memStorage.setItem('test', 'licia');
    expect(memStorage.getItem('test')).to.equal('licia');
    expect(memStorage.length).to.equal(1);
    memStorage.setItem('setItem', 'test');
    expect(memStorage.getItem('setItem')).to.equal('test');
    expect(memStorage.length).to.equal(2);
});

it('remove item', function ()
{
    memStorage.removeItem('setItem');
    expect(memStorage.length).to.equal(1);
});

it('JSON stringify', function ()
{
    memStorage.setItem('test2', 'licia');
    expect(JSON.parse(JSON.stringify(memStorage))).to.eql({test2: 'licia', test: 'licia'});
});

it('keys', function ()
{
    expect(memStorage.key(0)).to.equal('test');
    expect(memStorage.key(1)).to.equal('test2');
});

it('clear all items', function ()
{
    memStorage.clear();
    expect(memStorage.length).to.equal(0);
});