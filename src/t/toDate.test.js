const isDate = util.isDate;
const dateFormat = util.dateFormat;

expect(isDate(toDate())).to.be.true;
expect(isDate(toDate(null))).to.be.true;
expect(dateFormat(toDate('20180501'), 'yyyymmdd')).to.equal('20180501');
expect(dateFormat(toDate('2018-05-01'), 'yyyymmdd')).to.equal('20180501');
expect(dateFormat(toDate(1525197450849), 'yyyymm')).to.equal('201805');
