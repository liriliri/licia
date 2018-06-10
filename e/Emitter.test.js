it('basic', function() {
    var e = new Emitter(),
        a = 1;

    function add() {
        a++;
    }

    e.on('add', add);
    e.emit('add', 1);
    expect(a).to.equal(2);
    e.off('add', add);
    e.emit('add', 1);
    expect(a).to.equal(2);
    e.once('add', add);
    e.emit('add', 1);
    e.emit('add', 1);
    expect(a).to.equal(3);
});

it('mixin', function() {
    var a = 1;

    function add(n) {
        a += n;
    }

    var b = {};
    Emitter.mixin(b);
    b.on('add', add);
    b.emit('add', 2);
    expect(a).to.equal(3);
});

it('nonsense off and emit', function() {
    var e = new Emitter();

    e.emit('test');
    e.off('test', function() {});
});
