var $dom, windowY, origScroll;

before(function ()
{
    origScroll = window.scroll;
    window.scroll = function (x, y) { windowY = y };
    $('body').append('<div id="scrollTo" style="margin-top: 50px;"></div>');
    $dom = $('#scrollTo');
});

after(function () 
{ 
    window.scroll = origScroll;
    $dom.remove();
});

it('basic', function (done) 
{
    scrollTo(50, {
        tolerance: -50,
        callback: function () 
        {
            expect(windowY).to.equal(100);
            done();
        }
    });
});

it('dom', function (done) 
{
    scrollTo('#scrollTo', {
        callback: function () 
        {
            expect(windowY).to.not.equal(0);
            done();
        }
    });
});