$('body').append('<div id="dollarData"></div>');

var $dom = $('#dollarData');

it('get node\'s data', function ()
{
    $dom.append('<div class="getter"></div>');

    var $el = $dom.find('.getter');

    $el.attr('data-one', 'true');
    expect($data($el, 'one')).to.equal('true');
    expect($data($el.get(0), 'one')).to.equal('true');
});

it('set node\'s data', function ()
{
    $dom.append('<div class="setter"></div>');

    var $el = $dom.find('.setter');

    $data($el, 'one', 'true');
    expect($el.attr('data-one')).to.equal('true');

    $data($el, {
        'two': 'true',
        'three': 'true'
    });
    expect($el.attr('data-two')).to.equal('true');
    expect($el.attr('data-three')).to.equal('true');
});
