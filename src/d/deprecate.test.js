it('basic', () => {
    expect(deprecate(() => {})).to.be.a('function');
});
