it('basic', () => {
    expect(jsonClone({ name: 'licia' })).to.eql({ name: 'licia' });
});
