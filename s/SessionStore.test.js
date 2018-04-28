var sessionStorage = window.sessionStorage;

it('basic', function () 
{
    sessionStorage.setItem('SessionStore', '{licia}');

    var store = new SessionStore('SessionStore', {
        a: 1,
        b: 2,
        c: 3
    });

    store.set('c', 4);
    expect(JSON.parse(sessionStorage.getItem('SessionStore'))).to.eql({
        a: 1,
        b: 2,
        c: 4
    });

    store.clear();
    expect(sessionStorage.getItem('SessionStore')).to.be.an('null');

    sessionStorage.setItem('SessionStore', '"licia"');
    store = new SessionStore('SessionStore', {
        a: 1
    });
    expect(JSON.parse(sessionStorage.getItem('SessionStore'))).to.eql({a: 1});
});