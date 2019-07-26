function transform(obj) {
    return JSON.parse(stringifyAll(obj));
}

it('string', () => {
    expect(transform('test')).to.equal('test');
});

it('number', () => {
    expect(transform(5)).to.equal(5);
    expect(transform(NaN)).to.eql({
        value: 'NaN',
        type: 'Number'
    });
    expect(transform(Infinity)).to.eql({
        value: 'Infinity',
        type: 'Number'
    });
    expect(transform(-Infinity)).to.eql({
        value: '-Infinity',
        type: 'Number'
    });
});

it('boolean', () => {
    expect(transform(true)).to.equal(true);
    expect(transform(false)).to.equal(false);
});

it('null', () => {
    expect(transform(null)).to.equal(null);
});

it('function', () => {
    expect(transform(function test() {})).to.eql({
        type: 'Function',
        value: 'function test() {}'
    });
});

it('regexp', () => {
    expect(transform(/test/g)).to.eql({
        type: 'RegExp',
        value: '/test/g'
    });
});
