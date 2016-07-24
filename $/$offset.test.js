$('body').append('<div id="dollarOffset"></div>');

var $dom = $('#dollarOffset');

it('get offset', function ()
{
    var offset = $dom.offset();

    expect($offset('#dollarOffset')).to.eql({
        left: offset.left,
        top: offset.top,
        width: $dom.width(),
        height: $dom.height()
    });
});