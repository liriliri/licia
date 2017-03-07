it('basic', function ()
{
    var obj = [{a: 1}, {a: 2}],
        obj2 = cloneDeep(obj);

    expect(obj[0] === obj2[1]).to.be.false;
    expect(obj).to.eql(obj2);
});