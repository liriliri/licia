$('body').append('<div id="dollarRemove"></div>');

it('remove elements', function ()
{
    $remove('#dollarRemove');
    expect($('#dollarRemove').length).to.equal(0);
});