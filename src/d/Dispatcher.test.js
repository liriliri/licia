let dispatcher;

beforeEach(function() {
    dispatcher = new Dispatcher();
});

it('basic', function() {
    const payload = {};
    let a = 0;
    let b = 0;

    dispatcher.register(function(p) {
        a++;
        expect(dispatcher.isDispatching()).to.be.true;
        expect(p).to.equal(p);
    });

    dispatcher.register(function(p) {
        b++;
        expect(p).to.equal(p);
    });

    expect(dispatcher.isDispatching()).to.be.false;
    dispatcher.dispatch(payload);
    expect(a).to.equal(1);
    expect(b).to.equal(1);

    dispatcher.dispatch(payload);
    expect(a).to.equal(2);
    expect(b).to.equal(2);
});

it('wait for', function() {
    let a = 0,
        b = 0;

    const tokenA = dispatcher.register(function() {
        a++;
    });

    dispatcher.register(function() {
        dispatcher.waitFor([tokenA, tokenB]);

        expect(a).to.equal(1);
        expect(b).to.equal(1);
    });

    const tokenB = dispatcher.register(function() {
        b++;
    });

    dispatcher.dispatch({});
});

it('unregister', function() {
    let a = 0;

    const tokenA = dispatcher.register(function() {
        a++;
    });

    dispatcher.unregister(tokenA);

    dispatcher.dispatch();
    expect(a).to.equal(0);
});
