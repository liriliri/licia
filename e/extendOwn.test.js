it('extend destination with properties of source objects', function ()
{
    var srcB = {a: 'override', b: 'b'},
        srcC = Object.create({c: 'c'});

    expect(extendOwn({a: 'a'}, srcB, srcC)).to.deep.equal({
        a: 'override',
        b: 'b'
    });
});