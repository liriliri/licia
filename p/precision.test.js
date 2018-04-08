var each = util.each;

it('basic', function () 
{
    var tests = [
        [0, 0],
        [1.2, 1],
        [1.000, 0],
        [1.234, 3],
        [-1.2, 1]
    ];

    each(tests, function (test) 
    {
        expect(precision(test[0])).to.equal(test[1]);
    });
});