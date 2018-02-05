it('basic', function () 
{
    var execTime = timeTaken(function ()
    {
        for (var i = 0; i < 10000; i++);         
    });

    expect(execTime).to.be.a('number');
});