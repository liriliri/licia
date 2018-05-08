var each = util.each;

it('basic', function () 
{
    var tests = [
        [new Map(), false],
        [new WeakMap(), true],
        [{}, false]
    ];

    each(tests, function (test) 
    {
        expect(isWeakMap(test[0])).to.equal(test[1]);
    });
});