it('basic', async function() {
    expect(await getPort(3000)).to.be.a('number');
    expect(await getPort([3001, 3000])).to.be.a('number');
    expect(await getPort()).to.be.a('number');
});
