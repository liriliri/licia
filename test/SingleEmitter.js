it('basic', function() {
    const e = new SingleEmitter();
    let a = 1;

    function add() {
        a++;
    }

    e.addListener(add);
    e.emit(1);
    expect(a).to.equal(2);
    e.rmListener(add);
    e.emit(1);
    expect(a).to.equal(2);
    e.addListener(add);
    e.rmAllListeners();
    e.emit();
    expect(a).to.equal(2);
});

it('mixin', function() {
    let a = 1;

    function add(n) {
        a += n;
    }

    const b = {};
    SingleEmitter.mixin(b);
    b.addListener(add);
    b.emit(2);
    expect(a).to.equal(3);
    b.rmAllListeners();
});

it('rmListener in listener', function() {
    const e = new SingleEmitter();

    function listener() {
        e.rmListener('test', listener);
    }

    e.addListener(listener);
    e.addListener(function() {});

    e.emit();
});
