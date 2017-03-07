it('parse', function ()
{
    expect(Color.parse('#abc')).to.eql({
        val: [170, 187, 204, 1],
        model: 'rgb'
    });
    expect(Color.parse('#aabbcc')).to.eql({
        val: [170, 187, 204, 1],
        model: 'rgb'
    });
    expect(Color.parse('rgba(170, 187, 204, 0.5)')).to.eql({
        val: [170, 187, 204, 0.5],
        model: 'rgb'
    });
    expect(Color.parse('rgba(20%, 10%, 15%, 0.5)')).to.eql({
        val: [51, 26, 38, 0.5],
        model: 'rgb'
    });
    expect(Color.parse('hsla(328, 100%, 44%, 0.64)')).to.eql({
        val: [328, 100, 44, 0.64],
        model: 'hsl'
    });
});

it('convert', function ()
{
    var color = new Color('#abc');
    expect(color.toRgb()).to.eql('rgb(170, 187, 204)');
    expect(color.toHsl()).to.eql('hsl(210, 25%, 73%)');
    expect(color.toHex()).to.eql('#abc');
});