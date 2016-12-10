it('set object value at given path', function ()
{
    var obj = {};
    safeSet(obj, 'a.aa.aaa', 1);
    expect(obj).to.eql({a: {aa: {aaa: 1}}});
    safeSet(obj, ['a', 'aa'], 2);
    expect(obj).to.eql({a: {aa: 2}});
    safeSet(obj, 'a.b', 3);
    expect(obj).to.eql({a: {aa: 2, b: 3}});
});