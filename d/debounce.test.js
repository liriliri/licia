it('return debounce function', function (done)
{
    var counter = 0;

    var debounceFn = debounce(function ()
    {
        counter++;
    }, 50);

    debounceFn();
    debounceFn();
    debounceFn();
    setTimeout(debounceFn, 30);
    setTimeout(debounceFn, 60);
    setTimeout(debounceFn, 90);
    setTimeout(debounceFn, 120);
    setTimeout(debounceFn, 150);

    setTimeout(function ()
    {
        expect(counter).to.equal(1);
        done();
    }, 220);
});