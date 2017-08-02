it('basic', function () 
{
    expect(arrToMap([
        'a', 'b', 'c'
    ])).to.eql({
        a: true,
        b: true,
        c: true
    });
});