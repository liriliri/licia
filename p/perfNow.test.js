it('basic', function (done) 
{
    var start = perfNow();

    setTimeout(function () 
    {
        var end = perfNow();
        expect(start).to.be.a('number');
        expect(end).to.be.above(start);
        done();
    }, 10);
});