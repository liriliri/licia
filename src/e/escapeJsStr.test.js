it('basic', function() {
    expect(escapeJsStr('"\n')).to.equal('\\"\\n');
    var str = '"\'line\nline\r\\';
    expect(eval('"' + escapeJsStr(str) + '"')).to.equal(str);
});
