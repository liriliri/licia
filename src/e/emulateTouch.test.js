let $dom, dom;

before(() => {
    jQuery('body').append('<div id="emulateTouch"></div>');
    $dom = jQuery('#emulateTouch');
    dom = $dom[0];
});

after(() => {
    $dom.remove();
});

it('basic', done => {
    $dom.on('touchstart', () => done());
    emulateTouch(dom);
    util.trigger(dom, 'mousedown', {
        which: 1
    });
});
