it('basic', () => {
    expect(
        highlight('const a = 5;', 'js', { keyword: 'color:#569cd6;' })
    ).to.equal(
        '<span style="color:#569cd6;">const</span> a <span style="color:#994500;">=</span> <span style="color:#0086b3;">5</span>;'
    );
});
