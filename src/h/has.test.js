var obj = Object.create({ one: 1 });
obj.two = 2;

it('true', function() {
    expect(has(obj, 'two')).to.be.true;
});

it('false', function() {
    expect(has(obj, 'one')).to.be.false;
    expect(has(obj, 'three')).to.be.false;
});
