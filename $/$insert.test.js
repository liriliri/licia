$('body').append('<div id="dollarInsert"></div>');

var $dom = $('#dollarInsert');

function reset()
{
    $dom.html('<div id="test"><div class="mark"></div></div>');
}

it('insert before', function ()
{
    reset();
    $insert.before('#test', '<div>eris</div>');
    expect($dom.html()).to.equal('<div>eris</div><div id="test"><div class="mark"></div></div>');
});

it('insert after', function ()
{
    reset();
    $insert.after('#test', '<div>eris</div>');
    expect($dom.html()).to.equal('<div id="test"><div class="mark"></div></div><div>eris</div>');
});

it('insert to the beginning', function ()
{
    reset();
    $insert.prepend('#test', '<div>eris</div>');
    expect($dom.html()).to.equal('<div id="test"><div>eris</div><div class="mark"></div></div>');
});

it('insert to the end', function ()
{
    reset();
    $insert.append('#test', '<div>eris</div>');
    expect($dom.html()).to.equal('<div id="test"><div class="mark"></div><div>eris</div></div>');
});


