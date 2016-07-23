$('body').append('<div id="dollarSafeEls"></div>');

var dom = $('#dollarSafeEls').get(0);

it('turn string into elements', function ()
{
    expect($safeEls('#dollarSafeEls')[0]).to.equal(dom);
});

it('turn single element to an array', function ()
{
    expect($safeEls(dom)).to.eql([dom]);
});

it('do nothing to arrays', function ()
{
    expect($safeEls([dom])).to.eql([dom]);
});