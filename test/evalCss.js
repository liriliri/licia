let $dom;

before(function() {
    jQuery('body').append('<div id="evalCss"></div>');
    $dom = jQuery('#evalCss');
});

after(function() {
    $dom.remove();
});

it('basic', function() {
    const style = evalCss('#evalCss {width: 200px; height: 200px}');
    expect($dom.css('width')).to.equal('200px');
    expect($dom.css('height')).to.equal('200px');
    jQuery(style).remove();
});
