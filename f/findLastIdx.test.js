it('basic', function () 
{
    var arr = [{
        name: 'john',
        age: 24
    }, {
        name: 'jane',
        age: 23
    }, {
        name: 'kitty',
        age: 24
    }];

    expect(findLastIdx(arr, function (val) 
    {
         return val.age === 24;
    })).to.equal(2);

    expect(findLastIdx(arr, function (val) 
    {
         return val.age === 25;
    })).to.equal(-1);
});