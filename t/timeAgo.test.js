it('basic', function() {
    expect(timeAgo(ago(1000 * 6))).to.equal('just now');
    expect(timeAgo(new Date().getTime() + 1000 * 6)).to.equal('right now');
    expect(timeAgo(ago(1000 * 15))).to.equal('15 seconds ago');
    expect(timeAgo(ago(1000 * 60 * 5))).to.equal('5 minutes ago');
    expect(timeAgo(ago(1000 * 60 * 60 * 6))).to.equal('6 hours ago');
    expect(timeAgo(ago(1000 * 60 * 5), ago(1000 * 60 * 6))).to.equal(
        'in 1 minute'
    );

    function ago(time) {
        return new Date().getTime() - time;
    }
});
