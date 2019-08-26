let $dom;

before(function() {
    $('body').append('<div id="dollarCss"></div>');
    $dom = $('#dollarCss');
});

after(function() {
    $dom.remove();
});

it('get', function() {
    $dom.append('<div class="getter"></div>');

    const $el = $dom.find('.getter');

    $el.css('width', '100%');
    expect($css($el, 'width')).to.equal('100%');
    expect($css($el.get(0), 'width')).to.equal('100%');
});

it('set', function() {
    $dom.append('<div class="setter"></div>');

    const $el = $dom.find('.setter');

    $css($el, 'width', 14);
    expect($el.css('width')).to.equal('14px');
    $css($el, 'width', '16px');
    expect($el.css('width')).to.equal('16px');

    $css($el, {
        width: 20,
        height: 100
    });
    expect($el.css('width')).to.equal('20px');
    expect($el.css('height')).to.equal('100px');
});
