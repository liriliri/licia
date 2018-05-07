it('basic', function () 
{
    expect(reduceRight([[1], [2], [3]], function (a, b) 
    { 
        return a.concat(b); 
    }, [])).to.eql([3, 2, 1]);
});

it('object', function ()
{
    expect(reduceRight({
        key: 'value',
        key2: 'value2'
    }, function (acc, value, key)
    {
        acc[value] = key;

        return acc;
    }, {})).to.eql({
        value: 'key',
        value2: 'key2'
    });
});