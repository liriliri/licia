const proto = { a: 1 };
const obj = create(proto);
expect(util.getProto(obj)).to.equal(proto);
