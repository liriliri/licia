var localStorage = window.localStorage;

it('basic', function () 
{
    localStorage.setItem('LocalStore', '{eris}');

    var store = new LocalStore('LocalStore', {
        a: 1,
        b: 2,
        c: 3
    });

    store.set('c', 4);
    expect(JSON.parse(localStorage.getItem('LocalStore'))).to.eql({
        a: 1,
        b: 2,
        c: 4
    });

    store.clear();
    expect(localStorage.getItem('LocalStore')).to.be.an('null');

    localStorage.setItem('LocalStore', '"eris"');
    store = new LocalStore('LocalStore', {
        a: 1
    });
    expect(JSON.parse(localStorage.getItem('LocalStore'))).to.eql({a: 1});
});