var isBrowser = typeof window === 'object';

it('borwser', function ()
{
    if (!isBrowser) return;

    var windowRaf = window.requestAnimationFrame;
    if (windowRaf) expect(raf).to.equal(windowRaf);
});

it('node', function (done)
{
    if (isBrowser)
    {
        done();
        return;
    }

    var count = 0,
        isPause = false;

    function update()
    {
        if (isPause) return;

        count++;
        raf(update);
    }

    raf(update);

    setTimeout(function ()
    {
        isPause = true;
        expect(count > 2).to.be.true;
        done();
    }, 50);
});
