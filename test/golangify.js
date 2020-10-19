it('basic', async () => {
    const err = new Error('err');
    let fn = golangify(async () => {
        throw err;
    });
    expect(await fn()).to.eql([undefined, err]);
    fn = golangify(async num => num * 2);
    expect(await fn(2)).to.eql([4, null]);

    expect(await golangify(Promise.reject(err))).to.eql([undefined, err]);
    expect(await golangify(Promise.resolve(4))).to.eql([4, null]);
});
