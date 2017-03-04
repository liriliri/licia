var dom;

before(function ()
{
    $('body').append('<div id="dollarSafeEls"></div>');
    dom = $('#dollarSafeEls').get(0);
});

after(function () { $('#dollarSafeEls').remove() });

it('string', function ()
{
    expect($safeEls('#dollarSafeEls')[0]).to.equal(dom);
});

it('single element', function ()
{
    expect($safeEls(dom)).to.eql([dom]);
});

it('array', function ()
{
    expect($safeEls([dom])).to.eql([dom]);
});