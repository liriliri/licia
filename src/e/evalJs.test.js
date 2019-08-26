it('basic', function() {
    expect(evalJs('5+2')).to.equal(7);
    expect(evalJs('{a: 2}')).to.eql({ a: 2 });
});

it('context', function() {
    const ctx = { a: 1 };
    expect(evalJs('this.a', ctx)).to.equal(1);
    evalJs('this.a = 2;', ctx);
    expect(ctx.a).to.equal(2);
});
