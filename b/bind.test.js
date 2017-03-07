it('basic', function ()
{
    var fn = bind(function (msg)
    {
        return this.name + ': ' + msg;
    }, {name: 'eustia'}, 'I am a utility library.');

    expect(fn()).to.equal('eustia: I am a utility library.');
});