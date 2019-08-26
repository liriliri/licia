it('basic', function() {
    let count = 0;
    const fn = once(function() {
        count++;
    });
    fn();
    fn();
    fn();
    expect(count).to.equal(1);
});
