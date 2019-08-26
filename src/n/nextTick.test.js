it('basic', function() {
    let invoked = false;

    nextTick(function() {
        invoked = true;
    });

    expect(invoked).to.be.false;

    setTimeout(function() {
        expect(invoked).to.be.true;
    }, 10);
});
