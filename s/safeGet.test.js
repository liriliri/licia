it('get object property safely', function ()
{
    var obj = {a: {aa: {aaa: 1}}};
    expect(safeGet(obj, 'a.aa.aaa')).to.equal(1);
    expect(safeGet(obj, ['a', 'aa'])).to.eql({aaa: 1});
    expect(safeGet(obj, 'a.b')).to.be.an('undefined');
});