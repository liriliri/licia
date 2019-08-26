it('basic', function() {
    const obj = { a: { aa: { aaa: 1 } } };
    expect(safeDel(obj, 'a.aa.aaa')).to.equal(1);
    expect(safeDel(obj, ['a', 'aa'])).to.eql({});
    expect(safeDel(obj, 'a.b')).to.be.an('undefined');
    expect(obj).to.eql({ a: {} });
});
