var each = util.each;

it('basic', function () 
{
    var tests = [
        [true, true],
        [false, false],
        [0, false],
        [1, true],
        [-1, true],
        ['', false],
        ['1', true],
        ['0', false],
        ['false', false],
        ['FALSE', false],
        [null, false],
        [undefined, false],
        [{}, true],
        [[], true]
    ];

    each(tests, function (test) 
    {
        expect(toBool(test[0])).to.equal(test[1]);
    });
});