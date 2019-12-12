const hashTable = new HashTable(128);
hashTable.set('name', 'redhoodsu');
expect(hashTable.get('name')).to.equal('redhoodsu');
expect(hashTable.has('name')).to.be.true;
hashTable.delete('name');
expect(hashTable.has('name')).to.equal(false);
