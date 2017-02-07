it('basic', function (done)
{
    waterfall([
        function (cb)
        {
            cb(null, 'one');
        },
        function (arg1, cb)
        {
            expect(arg1).to.equal('one');
            cb(null, 'done');
        }
    ], function (err, result)
    {
        expect(err).to.be.a('null');
        expect(result).to.equal('done');

        done();
    });
});

it('occur error', function (done)
{
    var invoked = false;

    waterfall([
        function (cb)
        {
            cb(new Error('Something is wrong'));
        },
        function (cb)
        {
            invoked = true;
            cb();
        }
    ], function (err)
    {
        expect(err).to.be.an('error');
        expect(invoked).to.be.false;
        done();
    });
});

it('no callback', function (done)
{
    waterfall([
        function (cb)
        {
            cb(null, 'one');
        },
        function (arg1, cb)
        {
            expect(arg1).to.equal('one');
            cb();
            done();
        }
    ]);
});

it('callback always async', function (done)
{
    var invoked = false;

    waterfall([], function ()
    {
        invoked = true;
        done();
    });

    expect(invoked).to.be.false;
});