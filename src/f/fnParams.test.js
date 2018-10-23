it('basic', function() {
    expect(fnParams(function(a, b) {})).to.eql(['a', 'b']);
    expect(fnParams(function() {})).to.eql([]);
    expect(fnParams(function(/* comments */ a, b) {})).to.eql(['a', 'b']);
});
