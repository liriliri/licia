before(function() {
    $('body').append('<div id="dollarRemove"></div>');
});

it('basic', function() {
    expect($('#dollarRemove').length).to.equal(1);
    $remove('#dollarRemove');
    expect($('#dollarRemove').length).to.equal(0);

    $remove('#not-exists');
});
