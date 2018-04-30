it('basic', function ()
{
    function five() { return 'five'; }
    var sayFive = wrap(five, function (fn)
    {
        return 'Say ' + fn();
    });
    expect(sayFive()).to.be.equal('Say five');
});