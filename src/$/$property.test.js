let $dom;

before(function() {
    $('body').append('<div id="dollarPropFactory"></div>');
    $dom = $('#dollarPropFactory');
});

after(function() {
    $dom.remove();
});

it('get', function() {
    $dom.append('<div class="getter"></div>');

    const $el = $dom.find('.getter');

    $el.text('Eustia rocks!');
    expect($property.text($el)).to.equal('Eustia rocks!');
});

it('set', function() {
    $dom.append('<div class="setter"></div>');

    const $el = $dom.find('.setter');

    $property.text($el, 'Eustia rocks!!');
    expect($el.text()).to.equal('Eustia rocks!!');
});

it('empty', function() {
    expect($property.text([])).to.equal('');
    $property.text([], 'No effects');
});
