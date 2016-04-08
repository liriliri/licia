describe('$css', function ()
{
    var $css = _.$css;

    $('body').append('<div id="dollarCss"></div>');

    var $dom = $('#dollarCss');

    it('get node\'s css value', function ()
    {
        $dom.append('<div class="getter"></div>');

        var $el = $dom.find('.getter');

        $el.css('width', '100%');
        expect($css($el, 'width')).to.equal('100%');
        expect($css($el.get(0), 'width')).to.equal('100%');
    });

    it('set node\'s css value', function ()
    {
        $dom.append('<div class="setter"></div>');

        var $el = $dom.find('.setter');

        $css($el, 'width', '100%');
        expect($el.css('width')).to.equal('100%');

        $css($el, {
            'width': '50%',
            'height': '100%'
        });
        expect($el.css('width')).to.equal('50%');
        expect($el.css('height')).to.equal('100%');
    });

    $dom.remove();
});