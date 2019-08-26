it('basic', function() {
    const a = 65;

    const el = document.createElement('div');
    el.addEventListener('keydown', function(e) {
        expect(e.keyCode).to.equal(a);
    });
    trigger(el, 'keydown', { keyCode: a });
});
