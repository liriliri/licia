it('basic', function() {
    var obj = {
        a: 0,
        b: function() {},
        c: function() {}
    };

    expect(methods(obj)).to.eql(['b', 'c']);
});
