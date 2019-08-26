let $dom;

before(function() {
    $('body').append('<div id="dollarInsert"></div>');
    $dom = $('#dollarInsert');
});

after(function() {
    $dom.remove();
});

beforeEach(function() {
    $dom.html('<div id="test"><div class="mark"></div></div>');
});

it('insert before', function() {
    $insert.before('#test', '<div>licia</div>');
    expect($dom.html()).to.equal(
        '<div>licia</div><div id="test"><div class="mark"></div></div>'
    );
});

it('insert after', function() {
    $insert.after('#test', '<div>licia</div>');
    expect($dom.html()).to.equal(
        '<div id="test"><div class="mark"></div></div><div>licia</div>'
    );
});

it('insert to the beginning', function() {
    $insert.prepend('#test', '<div>licia</div>');
    expect($dom.html()).to.equal(
        '<div id="test"><div>licia</div><div class="mark"></div></div>'
    );
});

it('insert to the end', function() {
    $insert.append('#test', '<div>licia</div>');
    expect($dom.html()).to.equal(
        '<div id="test"><div class="mark"></div><div>licia</div></div>'
    );
});
