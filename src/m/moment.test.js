it('basic', function() {
    expect(moment('20180501').format('yyyy-mm-dd')).to.equal('2018-05-01');
});

it('isValid', function() {
    expect(moment('test').isValid()).to.be.false;
    expect(moment().isValid()).to.be.true;
});

it('isLeapYear', function() {
    expect(moment('20120501').isLeapYear()).to.be.true;
    expect(moment('20150501').isLeapYear()).to.be.false;
});

it('valueOf', function() {
    expect(moment(1525161584274).valueOf()).to.equal(1525161584274);
});

it('isSame', function() {
    expect(moment(1525161584274).isSame(moment(1525161584274))).to.be.true;
});

it('isBefore isAfter', function() {
    const m1 = moment(1525161584274);
    const m2 = moment(1425161584274);

    expect(m2.isBefore(m1)).to.be.true;
    expect(m1.isAfter(m2)).to.be.true;
});

it('year month date hour minute millisecond', function() {
    const m = moment(1525305141649);

    expect(m.year()).to.equal(2018);
    m.year(2019);
    expect(m.year()).to.equal(2019);

    expect(m.month()).to.equal(4);
    m.month(5);
    expect(m.month()).to.equal(5);

    expect(m.date()).to.equal(3);
    m.date(4);
    expect(m.date()).to.equal(4);

    expect(m.hour()).to.equal(7);
    m.hour(8);
    expect(m.hour()).to.equal(8);

    expect(m.minute()).to.equal(52);
    m.minute(53);
    expect(m.minute()).to.equal(53);

    expect(m.second()).to.equal(21);
    m.second(22);
    expect(m.second()).to.equal(22);

    expect(m.millisecond()).to.equal(649);
    m.millisecond(600);
    expect(m.millisecond()).to.equal(600);
});

it('unix', function() {
    expect(moment(1525305141649).unix()).to.equal(1525305141);
});

it('clone', function() {
    const m1 = moment(1525161584274);
    const m2 = m1.clone();

    expect(m1.isSame(m2)).to.be.true;
});

it('toDate toArray toJSON toISOString toObject toString', function() {
    const m = moment(1525305141649);

    expect(m.toDate()).to.be.a('Date');
    expect(m.toArray()).to.eql([2018, 4, 3, 7, 52, 21, 649]);
    expect(m.toISOString()).to.equal(m.toDate().toISOString());
    expect(m.toJSON()).to.equal(m.toISOString());
    expect(m.toObject()).to.eql({
        years: 2018,
        months: 4,
        date: 3,
        hours: 7,
        minutes: 52,
        seconds: 21,
        milliseconds: 649
    });
    expect(m.toString()).to.equal(m.toDate().toUTCString());
});

it('set', function() {
    const m = moment(1525305141649);

    m.set('y', 2016);
    expect(m.year()).to.equal(2016);
    m.set('month', 5);
    expect(m.month()).to.equal(5);
    m.set('D', 4);
    expect(m.date()).to.equal(4);
    m.set('hours', 8);
    expect(m.hour()).to.equal(8);
    m.set('m', 53);
    expect(m.minute()).to.equal(53);
    m.set('ms', 300);
    expect(m.millisecond()).to.equal(300);
});

it('startOf', function() {
    const m = moment(1525305141649);

    m.startOf('second');
    expect(m.millisecond()).to.equal(0);

    m.startOf('minute');
    expect(m.second()).to.equal(0);

    m.startOf('day');
    expect(m.hour()).to.equal(0);

    m.startOf('month');
    expect(m.date()).to.equal(1);

    m.startOf('year');
    expect(m.month()).to.equal(0);
});

it('endOf', function() {
    const m = moment(1525305141649);

    m.endOf('second');
    expect(m.millisecond()).to.equal(999);

    m.endOf('minute');
    expect(m.second()).to.equal(59);

    m.endOf('day');
    expect(m.hour()).to.equal(23);

    m.endOf('month');
    expect(m.date()).to.equal(31);

    m.endOf('year');
    expect(m.month()).to.equal(11);
});

it('daysInMonth', function() {
    expect(moment('20180501').daysInMonth()).to.equal(31);
    expect(moment('20180401').daysInMonth()).to.equal(30);
});

it('add subtract', function() {
    const m = moment(1525305141649);

    m.add(1, 'y');
    expect(m.year()).to.equal(2019);
    m.subtract(1, 'year');
    expect(m.year()).to.equal(2018);

    m.add(2, 'months');
    expect(m.month()).to.equal(6);
    m.add(10, 'M');
    expect(m.month()).to.equal(4);
    expect(m.year()).to.equal(2019);
    m.subtract(6, 'months');
    expect(m.month()).to.equal(10);
    expect(m.year()).to.equal(2018);

    m.add(1, 'day');
    expect(m.date()).to.equal(4);
    m.subtract(6, 'days');
    expect(m.date()).to.equal(29);
    expect(m.month()).to.equal(9);

    m.add(2, 'hours');
    expect(m.hour()).to.equal(9);
    m.subtract(15, 'hours');
    expect(m.hour()).to.equal(18);
    expect(m.date()).to.equal(28);

    m.add(3, 'minutes');
    expect(m.minute()).to.equal(55);
    m.subtract(5, 'm');
    expect(m.minute()).to.equal(50);

    m.add(1, 's');
    expect(m.second()).to.equal(22);
    m.subtract(5, 'seconds');
    expect(m.second()).to.equal(17);

    m.add(22, 'ms');
    expect(m.millisecond()).to.equal(671);
    m.subtract(1000, 'milliseconds');
    expect(m.millisecond()).to.equal(671);
    expect(m.second()).to.equal(16);
});

it('diff', function() {
    const m1 = moment('20180508');
    const m2 = moment('20170505');

    expect(m1.diff(m2, 'year')).to.equal(1);
    expect(m1.diff(m2, 'year', true)).to.be.above(1);
    expect(m1.diff(m2, 'month')).to.equal(12);
    expect(m1.diff(m2, 'day')).to.equal(368);
    expect(m1.diff(m2, 'hour')).to.equal(368 * 24);
    expect(m1.diff(m2, 'second')).to.equal(368 * 24 * 3600);
    expect(m1.diff(m2, 'millisecond')).to.equal(368 * 24 * 3600 * 1000);
});
