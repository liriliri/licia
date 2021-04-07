const toStr = util.toStr;

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
    const b = {};
    obj = transform({ b }, { ignore: [b] });
    expect(obj.enumerable.b).to.be.undefined;
});

it('parse', () => {
    function transform(obj, options = {}) {
        return stringifyAll.parse(stringifyAll(obj, options));
    }
    function Student(name) {
        this.name = name;
    }
    Student.prototype.introduce = function() {
        console.log('My name is ' + this.name);
    };
    let obj = {
        number: 1,
        boolean: false,
        null: null,
        string: 'str',
        nan: NaN,
        inifinity: Number.POSITIVE_INFINITY,
        negativeInifinity: Number.NEGATIVE_INFINITY,
        undefined: undefined,
        // prettier-ignore
        fn: function sum(a, b) { return a + b; },
        regexp: /test/gi,
        student: new Student('licia')
    };
    obj.circular = obj;
    Object.defineProperty(obj, 'unenumerable', {
        value: 'unenumerable',
        enumerable: false
    });
    obj = transform(obj, {
        unenumerable: true
    });
    expect(obj.number).to.equal(1);
    expect(obj.boolean).to.equal(false);
    expect(obj.null).to.equal(null);
    expect(obj.string).to.equal('str');
    expect(isNaN(obj.nan)).to.be.true;
    expect(obj.inifinity).to.equal(Number.POSITIVE_INFINITY);
    expect(obj.negativeInifinity).to.equal(Number.NEGATIVE_INFINITY);
    expect(obj.undefined).to.equal(undefined);
    expect(toStr(obj.fn)).to.equal('function sum(a, b) { return a + b; }');
    expect(toStr(obj.regexp)).to.equal('/test/gi');
    expect(Object.getOwnPropertyDescriptor(obj, 'unenumerable').enumerable).to
        .be.false;
    expect(obj.student.name).to.equal('licia');
    expect(obj.student.introduce).to.be.a('function');
    expect(obj.circular).to.equal(obj);
});
