it('convert key code to key name', function ()
{
    expect(keyCode(13)).to.equal('enter');
    expect(keyCode(65)).to.equal('a');
    expect(keyCode(49)).to.equal('1');
    expect(keyCode(112)).to.equal('f1');
    expect(keyCode(97)).to.equal('numpad 1');
});

it('convert key name to key code', function ()
{
    expect(keyCode('enter')).to.equal(13);
});

