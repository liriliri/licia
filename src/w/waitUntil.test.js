const now = util.now;

it('basic', async () => {
    let a = 5;
    setTimeout(() => (a = 10), 500);
    await waitUntil(() => a === 10);
    expect(a).to.equal(10);
});

it('timeout', async () => {
    let a = 5;
    setTimeout(() => (a = 10), 500);
    let err;
    try {
        await waitUntil(() => a === 10, 20);
    } catch (e) {
        err = e;
    }
    expect(err).to.be.an('error');
});

it('interval', async () => {
    const startTime = now();
    let a = 5;
    setTimeout(() => (a = 10), 20);
    await waitUntil(() => a === 10, 0, 20);
    expect(a).to.equal(10);
    expect(now() - startTime).to.be.below(50);
});

it('async', async () => {
    let a = 5;
    setTimeout(() => (a = 10), 500);
    await waitUntil(async () => a === 10);
    expect(a).to.equal(10);
});
