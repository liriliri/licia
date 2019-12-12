const bloom = new BloomFilter(256, 3);
bloom.add('Bruce Wayne');
bloom.add('Clark Kent');
expect(bloom.test('Clark Kent')).to.equal(true);
expect(bloom.test('Bruce Wayne')).to.equal(true);
expect(bloom.test('Tony Stark')).to.equal(false);
