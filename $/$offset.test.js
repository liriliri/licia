var $dom;

before(function ()
{
    $('body').append('<div id="dollarOffset"></div>');
    $dom = $('#dollarOffset');
});

after(function () { $dom.remove(); });

it('basic', function ()
{
    var offset = $dom.offset();

    expect($offset('#dollarOffset')).to.eql({
        left: offset.left,
        top: offset.top,
        width: $dom.width(),
        height: $dom.height()
    });
});