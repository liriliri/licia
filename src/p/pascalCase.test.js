expect(pascalCase('foo')).to.equal('Foo');
expect(pascalCase('FooBar')).to.equal('FooBar');
expect(pascalCase('foo--bar')).to.equal('FooBar');
expect(pascalCase('__foo__bar__')).to.equal('FooBar');
expect(pascalCase('foo bar')).to.equal('FooBar');
expect(pascalCase('foo.bar')).to.equal('FooBar');
expect(pascalCase('fooBar')).to.equal('FooBar');
