var $dom;

before(function() {
    $('body').append('<div id="dollarClass"></div>');
    $dom = $('#dollarClass');
});

after(function() {
    $dom.remove();
});

it('add', function() {
    $class.add('#dollarClass', 'add1');
    $class.add('#dollarClass', ['add2', 'add3']);
    $class.add('#dollarClass', 'add4 add5');
    $class.add('#dollarClass', 'add4');
    expect($dom.hasClass('add1')).to.be.true;
    expect($dom.hasClass('add2')).to.be.true;
    expect($dom.hasClass('add3')).to.be.true;
    expect($dom.hasClass('add4')).to.be.true;
    expect($dom.hasClass('add5')).to.be.true;
});

it('remove', function() {
    $dom.addClass('rm1 rm2 rm3 rm4 rm5');
    $class.remove('#dollarClass', 'rm1');
    $class.remove('#dollarClass', ['rm2', 'rm3']);
    $class.remove('#dollarClass', 'rm4 rm5');
    expect($dom.hasClass('rm1')).to.be.false;
    expect($dom.hasClass('rm2')).to.be.false;
    expect($dom.hasClass('rm3')).to.be.false;
    expect($dom.hasClass('rm4')).to.be.false;
    expect($dom.hasClass('rm5')).to.be.false;
});

it('toggle', function() {
    $class.toggle('#dollarClass', 'toggle');
    expect($dom.hasClass('toggle')).to.be.true;
    $class.toggle('#dollarClass', 'toggle');
    expect($dom.hasClass('toggle')).to.be.false;
});

it('check', function() {
    expect($class.has('#dollarClass', 'has')).to.be.false;
    $dom.addClass('has');
    expect($class.has('#dollarClass', 'has')).to.be.true;
});
