it('basic', function() {
    const map = new PseudoMap();
    map.set('1', 1);
    map.set('2', 2);
    map.set('3', 3);
    expect(map.get('1')).to.equal(1);
    expect(map.has('1')).to.equal(true);
    expect(map.has('4')).to.equal(false);
    map.delete('1');
    expect(map.has('1')).to.equal(false);
    expect(map.get('1')).to.an('undefined');

    expect(map.size).to.equal(2);
    map.clear();
    expect(map.size).to.equal(0);
    map.size = 3;
    expect(map.size).to.equal(0);
});

it('initialize data', function() {
    let map = new PseudoMap();
    map.set('1', 1);

    const map2 = new PseudoMap(map);
    expect(map2.get('1')).to.equal(1);

    map = new PseudoMap([['1', 1], ['2', 2]]);
    expect(map.get('1')).to.equal(1);
    expect(map.get('2')).to.equal(2);
});

it('forEach', function() {
    const map = new PseudoMap([['1', 1], ['2', 2]]);
    let sum = 0;
    map.forEach(function(val) {
        sum += val;
    });
    expect(sum).to.equal(3);
});
