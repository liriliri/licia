it('basic', async function() {
    const fetch = singleton(async function fetch(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(id);
            }, 100);
        });
    });
    const f1 = fetch(1);
    const f2 = fetch(1);
    const f3 = fetch(2);
    expect(f1).to.equal(f2);
    expect(f1).to.not.equal(f3);

    expect(await f1).to.equal(1);
    const f4 = fetch(1);
    expect(f1).to.not.equal(f4);
});
