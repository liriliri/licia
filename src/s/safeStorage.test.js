it('local', function() {
    var localStorage = window.localStorage,
        storage = safeStorage();

    expect(storage).to.equal(localStorage);
});

it('session', function() {
    var sessionStorage = window.sessionStorage,
        storage = safeStorage('session');

    expect(storage).to.equal(sessionStorage);
});

it('not available', function() {
    var localStorage = window.localStorage;

    var storage = safeStorage('local');
    storage.setItem('x', 'x');
    expect(storage.getItem('x')).to.equal('x');

    window.localStorage = localStorage;
});
