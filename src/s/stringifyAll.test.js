function transform(obj) {
    return JSON.parse(stringifyAll(obj));
}

it('enumerable', () => {
    const obj = transform({ a: 1, b: 2 });
    expect(obj.enumerable).to.eql({
        a: 1,
        b: 2
    });
});

it('proto', () => {
    function Test() {}
    Test.prototype = {
        a: 5
    };
    const obj = transform(new Test());
    expect(obj.proto.enumerable.a).to.equal(5);
});

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
    const obj = transform(function test() {});
    expect(obj.type).to.equal('Function');
    expect(obj.value).to.equal('function test() {}');
});

it('regexp', () => {
    const obj = transform(/test/g);
    expect(obj.type).to.equal('RegExp');
    expect(obj.value).to.equal('/test/g');
});
