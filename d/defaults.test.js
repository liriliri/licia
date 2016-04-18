it('fill in undefined properties in object', function ()
{
    var srcB = {a: 'override', b: 'b'},
        srcC = Object.create({c: 'c'});

    expect(defaults({a: 'a'}, srcB, srcC)).to.deep.equal({
        a: 'a',
        b: 'b',
        c: 'c'
    });
});