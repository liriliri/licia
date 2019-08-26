it('before', function() {
    let count = 0;
    const fn = before(5, function() {
        count++;
    });
    fn();
    expect(count).to.equal(1);
    fn();
    expect(count).to.equal(2);
    fn();
    fn();
    fn();
    fn();
    expect(count).to.equal(4);
});
