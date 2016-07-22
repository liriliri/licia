$('body').append('<div id="dollarSafeEls"></div>');

var dollarSafeEls = $('#dollarSafeEls').get(0);

it('turn string into elements', function ()
{
    expect($safeEls('#dollarSafeEls')[0]).to.equal(dollarSafeEls);
});

it('turn single element to an array', function ()
{
    expect($safeEls(dollarSafeEls)).to.eql([dollarSafeEls]);
});

it('do nothing to arrays', function ()
{
    expect($safeEls([dollarSafeEls])).to.eql([dollarSafeEls]);
});