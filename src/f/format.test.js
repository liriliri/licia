it('basic', function() {
    expect(format('%s_%s')).to.equal('%s_%s');
    expect(format('%s_%s', 'foo')).to.equal('foo_%s');
    expect(format('%s_%s', 'foo', 'bar')).to.equal('foo_bar');
    expect(format('%%s', 'foo')).to.equal('%foo');
});

it('number', function() {
    expect(format('%i, %d', 5.2, 6.3)).to.equal('5, 6');
    expect(format('%f', 6.3)).to.equal('6.3');
});

it('object', function() {
    expect(format('%o %o', [1, 2], { a: 1 })).to.equal('[1,2] {"a":1}');
    var a = {},
        b = { a: a };

    a.b = b;
    expect(format('%o %o', a, b)).to.equal(
        '[Error Stringify] [Error Stringify]'
    );
});
