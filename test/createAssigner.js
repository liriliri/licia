const obj = {};

createAssigner(function() {
    return 'a';
})(obj, { a: 1, b: 2 });

expect(obj).to.eql({ a: 1 });
