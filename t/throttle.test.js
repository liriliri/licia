it('return throttle function', function (done)
{
    var counter = 0;

    var throttleFn = throttle(function ()
    {
        counter++;
    }, 50);

    throttleFn();
    throttleFn();
    throttleFn();
    setTimeout(throttleFn, 60);
    setTimeout(throttleFn, 70);
    setTimeout(throttleFn, 110);
    setTimeout(throttleFn, 120);

    setTimeout(function ()
    {
        expect(counter).to.equal(3);
        done();
    }, 200)
});