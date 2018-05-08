var each = util.each;

it('basic', function () 
{
    var tests = [
        [new Set(), false],
        [new WeakSet(), true],
        [{}, false]
    ];

    each(tests, function (test) 
    {
        expect(isWeakSet(test[0])).to.equal(test[1]);
    });
});