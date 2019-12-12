expect(rtrim(' abc  ')).to.equal(' abc');
expect(rtrim('_abc_', '_')).to.equal('_abc');
expect(rtrim('_abc_', ['c', '_'])).to.equal('_ab');
expect(rtrim('_abc_', 'c_')).to.equal('_ab');
