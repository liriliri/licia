it('basic', () => {
    expect(highlight('const a = 5;')).to.equal(
        '<span style="color:#a71d5d;">const</span> a <span style="color:#994500;">=</span> <span style="color:#0086b3;">5</span>;'
    );
});
