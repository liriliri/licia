it('browser and node', function (done)
{
    if (typeof window === 'object')
    {
        var webkitRaf = window.webkitRequestAnimationFrame;
        if (webkitRaf) expect(raf).to.equal(webkitRaf);
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
