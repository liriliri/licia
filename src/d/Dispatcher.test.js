var dispatcher;

beforeEach(function() {
    dispatcher = new Dispatcher();
});

it('basic', function() {
    var payload = {},
        a = 0,
        b = 0;

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
    var a = 0,
        b = 0;

    var tokenA = dispatcher.register(function() {
        a++;
    });

    dispatcher.register(function() {
        dispatcher.waitFor([tokenA, tokenB]);

        expect(a).to.equal(1);
        expect(b).to.equal(1);
    });

    var tokenB = dispatcher.register(function() {
        b++;
    });

    dispatcher.dispatch({});
});

it('unregister', function() {
    var a = 0;

    var tokenA = dispatcher.register(function() {
        a++;
    });

    dispatcher.unregister(tokenA);

    dispatcher.dispatch();
    expect(a).to.equal(0);
});
