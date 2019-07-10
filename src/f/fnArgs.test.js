it('basic', () => {
    function test() {
        fnArgs(['number|string', '?Function', '...number'], arguments);
    }
    expect(() => {
        test(15);
        test('test', () => {});
        test('test', () => {}, 5);
    }).to.not.throw();
    expect(() => test()).to.throw();
    expect(() => test('test', 'test')).to.throw();
    expect(() => test('test', () => {}, 5, 'test')).to.throw();
});

it('min args', () => {
    expect(() => {
        fnArgs(['number', '?string', '?string'], [0]);
        fnArgs(['number', '...string'], [2]);
    }).to.not.throw();
});

it('max args', () => {
    expect(() => {
        fnArgs(['number'], [0, 2]);
    }).to.throw();
});

it('object', () => {
    expect(() => {
        fnArgs(['object'], [{}]);
    }).to.not.throw();
});
