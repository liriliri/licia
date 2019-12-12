const obj = { a: { aa: { aaa: 1 }, bb: null } };
expect(safeGet(obj, 'a.aa.aaa')).to.equal(1);
expect(safeGet(obj, ['a', 'aa'])).to.eql({ aaa: 1 });
expect(safeGet(obj, 'a.b')).to.be.an('undefined');
expect(safeGet(obj, [0])).to.be.an('undefined');
expect(safeGet(obj, 'a.bb.aa')).to.be.an('undefined');
