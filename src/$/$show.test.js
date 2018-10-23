var $dom;

before(function() {
    $('body').append('<div id="dollarShow" style="display:none"></div>');
    $dom = $('#dollarShow');
});

after(function() {
    $dom.remove();
});

it('basic', function() {
    $show('#dollarShow');
    expect($dom.css('display')).to.equal('block');
    $show('#dollarShow');
    expect($dom.css('display')).to.equal('block');
    $dom.css('display', 'none');
    $show('#dollarShow');
    expect($dom.css('display')).to.equal('block');
});
