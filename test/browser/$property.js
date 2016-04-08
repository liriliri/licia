describe('$property', function ()
{
    var $text = _.$property.text;

    $('body').append('<div id="dollarPropFactory"></div>');

    var $dom = $('#dollarPropFactory');

    it('get node\'s property', function ()
    {
        $dom.append('<div class="getter"></div>');

        var $el = $dom.find('.getter');

        $el.text('Eustia rocks!');
        expect($text($el)).to.equal('Eustia rocks!');
    });

    it('set node\'s property', function ()
    {
        $dom.append('<div class="setter"></div>');

        var $el = $dom.find('.setter');

        $text($el, 'Eustia rocks!!');
        expect($el.text()).to.equal('Eustia rocks!!');
    });

    $dom.remove();
});