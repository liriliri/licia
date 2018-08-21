it('basic', function () {
  expect(arrToCombine()).to.be.false;
  expect(arrToCombine('123', [1])).to.be.false;
  expect(arrToCombine({a: 1}, [1])).to.be.false;
  expect(arrToCombine(['a', 'b'], [1])).to.be.false;
  expect(arrToCombine(['a', 'b', 'c'], [1, 2, 3])).to.eql([{ a: 1 }, { b: 2 }, { c: 3 }]);
});
