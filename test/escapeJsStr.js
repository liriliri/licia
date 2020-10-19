expect(escapeJsStr('"\n')).to.equal('\\"\\n');
const str = '"\'line\nline\r\\';
expect(eval('"' + escapeJsStr(str) + '"')).to.equal(str);
