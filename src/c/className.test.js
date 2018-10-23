it('basic', function() {
    expect(className('a', 'b', 'c')).to.equal('a b c');
    expect(className('a', false, 'b', 0, 1, 'c')).to.equal('a b 1 c');
});

it('object', function() {
    expect(className('a', { b: false, c: true })).to.equal('a c');
});

it('array', function() {
    expect(className('a', ['b', 'c'])).to.equal('a b c');
    expect(className('a', ['b', 'c', { d: true, e: false }])).to.equal(
        'a b c d'
    );
});
