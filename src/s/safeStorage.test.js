it('local', function() {
    const localStorage = window.localStorage;
    const storage = safeStorage();

    expect(storage).to.equal(localStorage);
});

it('session', function() {
    const sessionStorage = window.sessionStorage;
    const storage = safeStorage('session');

    expect(storage).to.equal(sessionStorage);
});

it('not available', function() {
    const localStorage = window.localStorage;

    const storage = safeStorage('local');
    storage.setItem('x', 'x');
    expect(storage.getItem('x')).to.equal('x');

    window.localStorage = localStorage;
});
