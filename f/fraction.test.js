var each = util.each,
    PI = Math.PI;

it('basic', function () 
{
    var tests = [
        [0, '0'],
        [.2, '1/5'],
        [1.2, '6/5'],
        [1.3, '13/10'],
        [-8.36, '-209/25'],
        [-2.3, '-23/10']
    ];

    each(tests, function (test) 
    {
        expect(fraction(test[0])).to.equal(test[1]);
    });
});