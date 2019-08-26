let $dom;

before(function() {
    $('body').append('<div id="dollarData"><div class="inner"></div></div>');
    $dom = $('#dollarData');
});

after(function() {
    $dom.remove();
});

it('basic', function() {
    function click() {}
    $event.on($dom, 'click', click);
    $event.off($dom, 'click', click);
    $event.on($dom, 'click', '.inner', click);
    $event.off($dom, 'click', '.inner', click);
});
