it('create memoized function', function ()
{
    var fib = memoize(function(n)
    {
        return n < 2 ? n : fib(n - 1) + fib(n - 2);
    }, function (n)
    {
        return 'key' + n;
    });

    expect(fib(3)).to.equal(2);
    expect(fib(10)).to.equal(55);

    expect(fib.cache).to.eql({
        key0: 0,
        key1: 1,
        key2: 1,
        key3: 2,
        key4: 3,
        key5: 5,
        key6: 8,
        key7: 13,
        key8: 21,
        key9: 34,
        key10: 55
    });
});