it('basic', function () 
{
    var a = 65;

    var el = document.createElement('div');
    el.addEventListener('keydown', function (e) 
    {
        expect(e.keyCode).to.equal(a);
    });
    trigger(el, 'keydown', {keyCode: a});
});