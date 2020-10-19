const obj = {
    a: 0,
    b() {},
    c() {}
};

expect(methods(obj)).to.eql(['b', 'c']);
