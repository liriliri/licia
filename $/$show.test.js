$('body').append('<div id="dollarShow" style="display:none"></div>');

it('show elements', function ()
{
    $show('#dollarShow');
    expect($('#dollarShow').css('display')).to.equal('block');
});