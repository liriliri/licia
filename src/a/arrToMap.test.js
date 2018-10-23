it('basic', function() {
    expect(arrToMap(['a', 'b', 'c'])).to.eql({
        a: true,
        b: true,
        c: true
    });

    expect(arrToMap(['a', 'b', 'c'], 1)).to.eql({
        a: 1,
        b: 1,
        c: 1
    });

    expect(
        arrToMap(['a', 'b', 'c'], function(key) {
            return key;
        })
    ).to.eql({
        a: 'a',
        b: 'b',
        c: 'c'
    });
});
