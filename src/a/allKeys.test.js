const contain = util.contain;

const proto = {
    zero: 0,
    two: 2
};
const three = Symbol('three');
proto[three] = 3;
Object.defineProperty(proto, 'two', {
    enumerable: false
});
const obj = Object.create(proto);
obj.one = 1;
obj.four = 4;
Object.defineProperty(obj, 'four', {
    enumerable: false
});
const five = Symbol('five');
obj[five] = 5;

it('basic', () => {
    const keys = allKeys(obj).sort();
    expect(keys).to.eql(['one', 'zero']);
});

it('prototype', () => {
    const keys = allKeys(obj, {
        prototype: false
    }).sort();
    expect(keys).to.eql(['one']);
});

it('unenumerable', () => {
    const keys = allKeys(obj, {
        unenumerable: true
    }).sort();
    expect(keys).to.eql(['four', 'one', 'two', 'zero']);
});

it('symbol', () => {
    const keys = allKeys(obj, {
        symbol: true
    });
    expect(keys.length).to.equal(4);
    expect(contain(keys, three)).to.be.true;
    expect(contain(keys, five)).to.be.true;
});
