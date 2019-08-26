it('basic', function() {
    const obj = {
        a: 0,
        b: function() {},
        c: function() {}
    };

    expect(methods(obj)).to.eql(['b', 'c']);
});
