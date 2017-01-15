it('format date using mask', function ()
{
    var now = new Date(2016, 10, 19, 19, 0, 4);

    var expects = {
        'default': 'Sat Nov 19 2016 19:00:04',
        'shortDate': '11/19/16',
        'mediumDate': 'Nov 19, 2016',
        'longDate': 'November 19, 2016',
        'fullDate': 'Saturday, November 19, 2016',
        'shortTime': '7:00 PM',
        'mediumTime': '7:00:04 PM',
        'longTime': '7:00:04 PM GMT+0800',
        'isoDate': '2016-11-19',
        'isoTime': '19:00:04',
        'isoDateTime': '2016-11-19T19:00:04+0800',
        'isoUtcDateTime': '2016-11-19T11:00:04Z',
        'expiresHeaderFormat': 'Sat, 19 Nov 2016 19:00:04 GMT+0800',
        'yyyy-mm-dd HH:MM:ss': '2016-11-19 19:00:04'
    };

    _.each(expects, function (val, key)
    {
        expect(dateFormat(now, key)).to.equal(val);
    });
});

it('format date', function ()
{
    expect(dateFormat('HH:MM:ss')).to.equal(dateFormat(new Date, 'HH:MM:ss'));
});