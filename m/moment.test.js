it('basic', function () 
{
    expect(moment('20180501').format('yyyy-mm-dd')).to.equal('2018-05-01');
});

it('isValid', function () 
{
    expect(moment('test').isValid()).to.be.false;
    expect(moment().isValid()).to.be.true;
});

it('isLeapYear', function () 
{
    expect(moment('20120501').isLeapYear()).to.be.true;
    expect(moment('20150501').isLeapYear()).to.be.false;
});

it('valueOf', function () 
{
    expect(moment(1525161584274).valueOf()).to.equal(1525161584274);
});

it('isSame', function () 
{
    expect(moment(1525161584274).isSame(moment(1525161584274))).to.be.true;
});

it('isBefore isAfter', function () 
{
    var m1 = moment(1525161584274),
        m2 = moment(1425161584274);

    expect(m2.isBefore(m1)).to.be.true;    
    expect(m1.isAfter(m2)).to.be.true;
});

it('year month date hour minute millisecond', function () 
{
    var m = moment(1525305141649);

    expect(m.year()).to.equal(2018);
    expect(m.month()).to.equal(4);
    expect(m.date()).to.equal(3);
    expect(m.hour()).to.equal(7);
    expect(m.minute()).to.equal(52);
    expect(m.second()).to.equal(21);
    expect(m.millisecond()).to.equal(649);
});

it('unix', function ()
{
    expect(moment(1525305141649).unix()).to.equal(1525305141);
});

it('clone', function () 
{
    var m1 = moment(1525161584274),
        m2 = m1.clone();

    expect(m1.isSame(m2)).to.be.true;
});

it('toDate toArray toJSON toISOString toObject toString', function () 
{
    var m = moment(1525305141649);

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