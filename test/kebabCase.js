expect(kebabCase('foo')).to.equal('foo');
expect(kebabCase('foo--bar')).to.equal('foo-bar');
expect(kebabCase('__foo__bar__')).to.equal('foo-bar');
expect(kebabCase('foo bar')).to.equal('foo-bar');
expect(kebabCase('foo.bar')).to.equal('foo-bar');
expect(kebabCase('fooBar')).to.equal('foo-bar');
