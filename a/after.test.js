it('basic', function() {
    var count = 0;
    var fn = after(3, function() {
        count++;
    });
    fn();
    expect(count).to.equal(0);
    fn();
    fn();
    expect(count).to.equal(1);
    fn();
    expect(count).to.equal(2);
});
