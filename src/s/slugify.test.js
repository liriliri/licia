expect(slugify('I ♥ pony')).to.equal('I-love-pony');
expect(slugify('I ♥ pony', { ' ': '_' })).to.equal('I_love_pony');
