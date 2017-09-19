it('basic', function ()
{
    var obj = {a: {aa: [2,{b:33}]}};
    expect(safeGet(obj, 'a.aa[0]')).to.equal(2);
    expect(safeGet(obj, ['a', 'aa','1','b'])).to.eql(33);
    expect(safeGet(obj, 'a.b')).to.be.an('undefined');
});