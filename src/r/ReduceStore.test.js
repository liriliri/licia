it('basic', function() {
    var store = new ReduceStore(function(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }, 0);

    expect(store.getState()).to.equal(0);
    store.dispatch({ type: 'INCREMENT' });
    expect(store.getState()).to.equal(1);
    store.dispatch({ type: 'INCREMENT' });
    expect(store.getState()).to.equal(2);
    store.dispatch({ type: 'DECREMENT' });
    expect(store.getState()).to.equal(1);
});

it('subscribe', function() {
    var store = new ReduceStore(function(state) {
        return state;
    }, 0);

    var a = 0,
        b = 0;

    var unsubscribeA = store.subscribe(function() {
        a++;
    });

    store.dispatch({});
    expect(a).to.equal(1);

    var unsubscribeB = store.subscribe(function() {
        b++;
    });
    store.dispatch({});
    expect(a).to.equal(2);
    expect(b).to.equal(1);

    unsubscribeA();
    store.dispatch({});
    expect(a).to.equal(2);
    expect(b).to.equal(2);

    unsubscribeB();
    store.dispatch({});
    expect(a).to.equal(2);
    expect(b).to.equal(2);
});

it('delay unscribe', function() {
    var store = new ReduceStore(function(state) {
        return state;
    }, 0);

    var a = 0,
        b = 0;

    var unsubscribeA = store.subscribe(function() {
        a++;
        unsubscribeB();
    });

    var unsubscribeB = store.subscribe(function() {
        b++;
    });

    store.dispatch({});
    expect(a).to.equal(1);
    expect(b).to.equal(1);

    store.dispatch({});
    expect(a).to.equal(2);
    expect(b).to.equal(1);
});
