expect(camelCase('foo')).to.equal('foo');
expect(camelCase('FooBar')).to.equal('fooBar');
expect(camelCase('foo-bar')).to.equal('fooBar');
expect(camelCase('foo--bar')).to.equal('fooBar');
expect(camelCase('__foo__bar__')).to.equal('fooBar');
expect(camelCase('foo bar')).to.equal('fooBar');
expect(camelCase('foo.bar')).to.equal('fooBar');
