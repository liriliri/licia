it('basic', () => {
    const a = {};
    expect(getProto(Object.create(a))).to.equal(a);
});
