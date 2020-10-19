it('basic', async () => {
    expect(await isPortFree(3000)).to.be.a('boolean');
});
