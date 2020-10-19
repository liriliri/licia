let $dom;

before(() => {
    jQuery('body').append('<div id="loadCss"></div>');
    $dom = jQuery('#loadCss');
});

after(() => {
    $dom.remove();
});

it('basic', done => {
    const url = util.createUrl('#loadCss { width: 100px; }', {
        type: 'text/css'
    });
    loadCss(url, () => {
        setTimeout(() => {
            expect($dom.width()).to.equal(100);
            done();
        }, 1000);
    });
});
