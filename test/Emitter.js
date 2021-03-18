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
    b.removeAllListeners();
});

it('nonsense off', function() {
    const e = new Emitter();

    let a = 1;
    e.on('test', function() {
        a++;
    });
    e.emit('test');
    expect(a).to.equal(2);
    e.off('test', function() {});
    e.emit('test');
    expect(a).to.equal(3);
});

it('off in listener', function() {
    const e = new Emitter();

    function listener() {
        e.off('test', listener);
    }

    e.on('test', listener);
    e.on('test', function() {});

    e.emit('test');
});
