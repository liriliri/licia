it('basic', function() {
    expect(normalizePath('\\foo\\bar\\')).to.equal('/foo/bar/');
    expect(normalizePath('./foo//bar')).to.equal('./foo/bar');
});
