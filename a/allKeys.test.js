it('should retrieve all keys including those inherited', function ()
{
    var obj = Object.create({ zero: 0 });
    obj.two = 1;

    expect(allKeys(obj)).to.contain('zero');
});
