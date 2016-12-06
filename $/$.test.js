jQuery('body').append('<div id="dollar"></div>');

var $dom = jQuery('#dollar');

it('manipulate dom', function ()
{
    var dom = $($dom[0]);

    dom.addClass('test');
    expect($dom.hasClass('test')).to.be.true;
    $dom.addClass('test2');
    expect(dom.hasClass('test2')).to.be.true;
    dom.rmClass('test');
    expect($dom.hasClass('test')).to.be.false;
});

$dom.remove();