let $dom;

before(function() {
    jQuery('body').append('<div id="delegate"><div class="inner"></div></div>');
    $dom = jQuery('#delegate');
});

after(function() {
    $dom.remove();
});

it('basic', done => {
    function click() {
        done();
        delegate.remove($dom[0], 'click', '.inner', click);
    }
    delegate.add($dom[0], 'click', '.inner', click);
    $dom.find('.inner').click();
});
