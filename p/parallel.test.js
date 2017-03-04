it('basic', function (done)
{
    parallel([
        function (cb)
        {
            setTimeout(function () { cb(null, 'one') }, 100);
        },
        function (cb)
        {
            setTimeout(function () { cb(null, 'two') }, 50);
        }
    ], function (err, results)
    {
        expect(results).to.eql(['one', 'two']);
        done();
    });
});

it('empty tasks', function (done)
{
    parallel([], function (err, results)
    {
        expect(results).to.eql([]);
        done();
    });
});

it('error', function (done)
{
    parallel([
        function (cb)
        {
            setTimeout(function ()
            {
                cb(Error('Something is wrong'));
            }, 50);
        },
        function (cb)
        {
            cb(null, 'success');
        }
    ], function (err, results)
    {
        expect(err).to.be.an('error');
        expect(results[1]).to.equal('success');
        done();
    });
});

it('no callback', function ()
{
    var invoked = false;

    parallel([
        function (cb)
        {
            invoked = true;
            cb();
        },
        function (cb)
        {
            cb();
        }
    ]);

    expect(invoked).to.be.true;
});

it('callback always async', function (done)
{
    var invoked = false;

    parallel([
        function (cb) { cb() }
    ], function ()
    {
        invoked = true;
        done();
    });

    expect(invoked).to.be.false;
});