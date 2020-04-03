const cb = optimizeCb(
    function(b, c) {
        expect(b).to.equal(2);
        expect(c).to.be.an('undefined');
        expect(this.a).to.equal(1);
    },
    { a: 1 },
    1
);

cb(2, 3);
