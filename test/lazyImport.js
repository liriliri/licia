/* scripts
 * before: npm i --prefix .licia underscore@1.12.1
 */

const path = require('path');

const objToStr = util.objToStr;
const lowerCase = util.lowerCase;
const keys = util.keys;

it('basic', function() {
    util.delRequireCache('underscore');

    const r = lazyImport(require);
    let _ = r('underscore');

    const cache = require.cache;
    if (!cache) return;

    const underscorePath = path.resolve(
        __dirname,
        '../node_modules/underscore/underscore.js'
    );
    expect(cache[underscorePath]).to.be.an('undefined');
    expect(_.isNumber(5)).to.be.true;
    expect(cache[underscorePath]).to.be.an('object');

    util.delRequireCache('underscore');
    _ = r('../node_modules/underscore/underscore.js');
    expect(cache[underscorePath]).to.be.an('undefined');
    _.a = 'licia';
    expect(cache[underscorePath]).to.be.an('object');
});

function staticRequire(moduleId) {
    switch (moduleId) {
        case 'array':
            return [1, 2, 3];
        case 'string':
            return 'licia';
        case 'number':
            return 123;
        case 'object':
            return {
                name: 'surunzi',
                age: 18
            };
        case 'function':
            return function() {
                return true;
            };
        case 'generator':
            return function*() {
                yield 's';
                yield 'r';
                yield 'z';
            };
        case 'async':
            return async function() {
                return Promise.resolve(true);
            };
        case 'constructor':
            return function Person() {
                this.name = 'surunzi';
                this.age = 18;
            };
    }
}

it('primitives', function(done) {
    const r = lazyImport(staticRequire);
    expect(r('array')[0]).to.equal(1);
    expect(`${r('string')} hello`).to.equal('licia hello');
    expect(r('number') == 123).to.be.true;
    expect(r('object').name).to.equal('surunzi');
    expect(r('function')()).to.be.true;
    const generator = r('generator');
    const f = generator();
    let str = '';
    let ret;
    while (!(ret = f.next()).done) {
        str += ret.value;
    }
    expect(str).to.equal('srz');
    r('async')().then(result => {
        expect(result).to.be.true;
        done();
    });
});

it('type', function() {
    const r = lazyImport(staticRequire);
    expect(getType(r('array'))).to.equal('array');
    expect(getType(r('string'))).to.equal('string');
    expect(getType(r('number'))).to.equal('number');
    expect(getType(r('object'))).to.equal('object');
    expect(getType(r('function'))).to.equal('function');
    expect(getType(r('generator'))).to.equal('generatorfunction');
    expect(getType(r('async'))).to.equal('asyncfunction');
});

it('for...in', function() {
    const r = lazyImport(staticRequire);
    const arr = r('array');
    const copy = [];
    for (const i in arr) {
        copy[i] = arr[i];
    }
    expect(copy).to.eql([1, 2, 3]);
});

it('for...of', function() {
    const r = lazyImport(staticRequire);
    const arr = r('array');
    copy = [];
    for (const i of arr) {
        copy.push(i);
    }
    expect(copy).to.eql([1, 2, 3]);
    const str = r('string');
    copy = [];
    for (const c of str) {
        copy.push(c);
    }
    expect(copy.join('')).to.equal('licia');
});

it('keys', function() {
    const r = lazyImport(staticRequire);
    expect(keys(r('object')).length).to.equal(2);
    const fn = r('function');
    fn.a = 'licia';
    expect(keys(fn).length).to.equal(1);
});

it('constructor', function() {
    const r = lazyImport(staticRequire);
    const Constructor = r('constructor');
    const man = new Constructor();
    expect(man.name).to.equal('surunzi');
});

it('in', function() {
    const r = lazyImport(staticRequire);
    expect('age' in r('object')).to.be.true;
});

function getType(obj) {
    return lowerCase(objToStr(obj).slice(8, -1));
}
