it('basic', function ()
{
    var define = typeof util === 'object' ? util.define : _.define,
        count = 0;

    define('A', function ()
    {
        count++;
        return 'A';
    });
    define('B', 'A', function (A)
    {
        return A + 'B';
    });

    use(['A', 'B'], function (A, B)
    {
        expect(A).to.equal(A);
        expect(B).to.equal('AB');
    });

    use(function ()
    {
        expect(count).to.equal(1);
    });
});