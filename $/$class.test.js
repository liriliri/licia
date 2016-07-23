$('body').append('<div id="dollarClass"></div>');

var $dom = $('#dollarClass');

it('add classes', function ()
{
    $class.add('#dollarClass', 'add1');
    $class.add('#dollarClass', ['add2', 'add3']);
    expect($dom.hasClass('add1')).to.be.true;
    expect($dom.hasClass('add2')).to.be.true;
    expect($dom.hasClass('add3')).to.be.true;
});

it('remove classes', function ()
{
    $dom.addClass('rm1 rm2 rm3');
    $class.remove('#dollarClass', 'rm1');
    $class.remove('#dollarClass', ['rm2', 'rm3']);
    expect($dom.hasClass('rm1')).to.be.false;
    expect($dom.hasClass('rm2')).to.be.false;
    expect($dom.hasClass('rm3')).to.be.false;
});

it('toggle class', function ()
{
    $class.toggle('#dollarClass', 'toggle');
    expect($dom.hasClass('toggle')).to.be.true;
    $class.toggle('#dollarClass', 'toggle');
    expect($dom.hasClass('toggle')).to.be.false;
});

it('check class', function ()
{
    expect($class.has('#dollarClass', 'has')).to.be.false;
    $dom.addClass('has');
    expect($class.has('#dollarClass', 'has')).to.be.true;
});