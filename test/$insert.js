const el = util.h('div', 'licia');
const $el = $(el);

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
    const expected =
        '<div>licia</div><div id="test"><div class="mark"></div></div>';
    $insert.before('#test', el);
    expect($dom.html()).to.equal(expected);
    $el.remove();
    $insert.before('#test', '<div>licia</div>');
    expect($dom.html()).to.equal(expected);
});

it('insert after', function() {
    const expected =
        '<div id="test"><div class="mark"></div></div><div>licia</div>';
    $insert.after('#test', el);
    expect($dom.html()).to.equal(expected);
    $el.remove();
    $insert.after('#test', '<div>licia</div>');
    expect($dom.html()).to.equal(expected);
});

it('insert to the beginning', function() {
    const expected =
        '<div id="test"><div>licia</div><div class="mark"></div></div>';
    $insert.prepend('#test', el);
    expect($dom.html()).to.equal(expected);
    $el.remove();
    $insert.prepend('#test', '<div>licia</div>');
    expect($dom.html()).to.equal(expected);
});

it('insert to the end', function() {
    const expected =
        '<div id="test"><div class="mark"></div><div>licia</div></div>';
    $insert.append('#test', el);
    expect($dom.html()).to.equal(expected);
    $el.remove();
    $insert.append('#test', '<div>licia</div>');
    expect($dom.html()).to.equal(expected);
});
