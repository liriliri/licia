it('basic', function() {
    const obj = Object.create({ a: 1 });
    obj.b = 2;
    obj.c = 3;

    expect(values(obj).length).to.equal(2);
});
