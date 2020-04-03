let cb = optimizeCb(
    function(b, c) {
        expect(b).to.equal(2);
        expect(c).to.be.an('undefined');
        expect(this.a).to.equal(1);
    },
    { a: 1 },
    1
);

cb(2, 3);

cb = optimizeCb(
    function(b, c, d, e, f) {
        expect(b).to.equal(2);
        expect(c).to.equal(3);
        expect(d).to.equal(4);
        expect(e).to.equal(5);
        expect(f).to.be.an('undefined');
    },
    {},
    4
);

cb(2, 3, 4, 5, 6);

cb = optimizeCb(
    function() {
        expect(util.toArr(arguments).length).to.equal(4);
    },
    {},
    8
);

cb(2, 3, 4, 5);
