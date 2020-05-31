it('basic', function() {
    const e = new Emitter();
    let a = 1;

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
    e.on('add', add);
    e.removeAllListeners();
    e.emit('add');
    expect(a).to.equal(3);
    e.on('add', add);
    e.removeAllListeners('add');
    e.emit('add');
    expect(a).to.equal(3);
});

it('mixin', function() {
    let a = 1;

    function add(n) {
        a += n;
    }

    const b = {};
    Emitter.mixin(b);
    b.on('add', add);
    b.emit('add', 2);
    expect(a).to.equal(3);
});

it('nonsense off and emit', function() {
    const e = new Emitter();

    e.emit('test');
    e.off('test', function() {});
});
