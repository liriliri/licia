function transform(obj, options = {}) {
    return JSON.parse(stringifyAll(obj, options));
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

it('undefined', () => {
    expect(transform(undefined)).to.eql({
        type: 'Undefined'
    });
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

it('unenumerable', () => {
    const origObj = { one: 1 };
    Object.defineProperty(origObj, 'one', {
        enumerable: false
    });
    const obj = transform(origObj, {
        unenumerable: true
    });
    expect(obj.unenumerable.one).to.equal(1);
});

it('symbol', () => {
    const symbol = Symbol('one');
    const origObj = { [symbol]: 1, two: symbol };
    const obj = transform(origObj, {
        symbol: true
    });
    expect(obj.symbol['Symbol(one)']).to.equal(1);
    expect(obj.enumerable.two).to.eql({
        value: 'Symbol(one)',
        type: 'Symbol'
    });
});

it('getter', () => {
    const origObj = { one: 1 };
    Object.defineProperty(origObj, 'one', {
        get() {
            return 1;
        }
    });
    let obj = transform(origObj);
    expect(obj.enumerable.one).to.equal('(...)');
    expect(obj.enumerable['get one'].type).to.equal('Function');
    obj = transform(origObj, {
        accessGetter: true
    });
    expect(obj.enumerable.one).to.equal(1);
});

it('setter', () => {
    const origObj = { one: 1 };
    Object.defineProperty(origObj, 'one', {
        set() {}
    });
    const obj = transform(origObj);
    expect(obj.enumerable['set one'].type).to.equal('Function');
});

it('depth', () => {
    const obj = transform({ one: 1, two: { three: 3 } }, { depth: 1 });
    expect(obj.enumerable.two).to.equal('{...}');
});

it('ignore', () => {
    let obj = transform({}, { ignore: [Object.prototype] });
    expect(obj.prototype).to.be.undefined;
    let b = {};
    obj = transform({ b }, { ignore: [b] });
    expect(obj.enumerable.b).to.be.undefined;
});
