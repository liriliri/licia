// No need to write full tests because each module is already tested.

var $dom, dom;

before(function () 
{
    jQuery('body').append('<div id="dollar"></div>');
    $dom = jQuery('#dollar');
    dom = $($dom[0]);
});

after(function () { dom.remove(); });

it('offset', function () 
{
    expect(dom.offset()).to.be.an('object');
});

it('hide', function () 
{
    dom.hide();
    expect($dom.css('display')).to.equal('none');
});

it('show', function ()
{
    dom.show();
    expect($dom.css('display')).to.equal('block');
});

it('first', function () 
{
    var $first = dom.first();

    expect($first).to.be.an.instanceof(util.Select);
    expect($first[0]).to.equal(dom[0]);
});

it('last', function () 
{
    var $last = dom.last();

    expect($last).to.be.an.instanceof(util.Select);
    expect($last[0]).to.equal(dom[0]);
});

it('get', function () 
{
    expect(dom.get(0)).to.equal(dom[0]);
});

it('eq', function () 
{
    var $dom = dom.eq(0);

    expect($dom).to.be.an.instanceof(util.Select);
    expect($dom[0]).to.equal(dom[0]);
});

it('event', function () 
{
    function click() {}

    dom.on('click', click);
    dom.off('click', click);
});

it('html', function () 
{
    dom.html('<div>inner</div>');
    expect($dom.html()).to.equal('<div>inner</div>');
    $dom.html('');
    expect(dom.html()).to.equal('');
});

it('text', function () 
{
    dom.text('inner');
    expect($dom.text()).to.equal('inner');
    $dom.text('');
    expect(dom.text()).to.equal('');
});

it('val', function () 
{
    dom.val('test');
    expect($dom.val()).to.equal('test');
    $dom.val('');
    expect(dom.val()).to.equal('');
});

it('css', function () 
{
    dom.css('font-size', 14);
    expect($dom.css('font-size')).to.equal('14px');
    $dom.css('font-size', 15);
    expect(dom.css('font-size')).to.equal('15px');
});

it('attr', function () 
{
    dom.attr('data-name', 'licia');
    expect($dom.attr('data-name')).to.equal('licia');
    $dom.attr('data-name', '');
    expect(dom.attr('data-name')).to.equal('');
    dom.rmAttr('data-name');
});

it('data', function () 
{
    dom.data('name', 'licia');
    expect($dom.attr('data-name')).to.equal('licia');
    $dom.attr('data-name', '');
    expect(dom.data('name')).to.equal('');
});

it('class', function ()
{
    dom.addClass('test');
    expect($dom.hasClass('test')).to.be.true;
    $dom.addClass('test2');
    expect(dom.hasClass('test2')).to.be.true;
    dom.rmClass('test');
    expect($dom.hasClass('test')).to.be.false;
    dom.toggleClass('test');
    expect($dom.hasClass('test')).to.be.true;
});

it('parent', function () 
{
    var parent = dom.parent();

    expect(parent).to.be.an.instanceof(util.Select);
    expect(parent[0]).to.equal($dom.parent()[0]);
});

it('insert', function () 
{
    dom.html('<div>test1</div>');
    dom.append('test2');
    expect($dom.html()).to.equal('<div>test1</div>test2');
    dom.prepend('test0');
    expect($dom.html()).to.equal('test0<div>test1</div>test2');
    dom.html('<div>test</div>');
    var div = dom.find('div');
    div.before('<div>before</div>');
    div.after('<div>after</div>');
    expect($dom.html()).to.equal('<div>before</div><div>test</div><div>after</div>');
});