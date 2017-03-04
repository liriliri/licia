var $dom;

before(function ()
{
    $('body').append('<div id="dollarInsert"></div>');
    $dom = $('#dollarInsert');
});

after(function () { $dom.remove() });

beforeEach(function ()
{
    $dom.html('<div id="test"><div class="mark"></div></div>');
});

it('insert before', function ()
{
    $insert.before('#test', '<div>eris</div>');
    expect($dom.html()).to.equal('<div>eris</div><div id="test"><div class="mark"></div></div>');
});

it('insert after', function ()
{
    $insert.after('#test', '<div>eris</div>');
    expect($dom.html()).to.equal('<div id="test"><div class="mark"></div></div><div>eris</div>');
});

it('insert to the beginning', function ()
{
    $insert.prepend('#test', '<div>eris</div>');
    expect($dom.html()).to.equal('<div id="test"><div>eris</div><div class="mark"></div></div>');
});

it('insert to the end', function ()
{
    $insert.append('#test', '<div>eris</div>');
    expect($dom.html()).to.equal('<div id="test"><div class="mark"></div><div>eris</div></div>');
});
