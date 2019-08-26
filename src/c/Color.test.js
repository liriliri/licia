it('parse', function() {
    expect(Color.parse('#abc')).to.eql({
        val: [170, 187, 204, 1],
        model: 'rgb'
    });
    expect(Color.parse('#aabbcc')).to.eql({
        val: [170, 187, 204, 1],
        model: 'rgb'
    });
    expect(Color.parse('rgb(232, 188, 260)')).to.eql({
        val: [232, 188, 260, 1],
        model: 'rgb'
    });
    expect(Color.parse('rgba(180, 119, 59)')).to.eql({
        val: [180, 119, 59, 1],
        model: 'rgb'
    });
    expect(Color.parse('rgba(180, 119, 59, 0.5)')).to.eql({
        val: [180, 119, 59, 0.5],
        model: 'rgb'
    });
    expect(Color.parse('rgba(20%, 10%, 15%, 0.5)')).to.eql({
        val: [51, 26, 38, 0.5],
        model: 'rgb'
    });
    expect(Color.parse('rgba(20%, 10%, 15%)')).to.eql({
        val: [51, 26, 38, 1],
        model: 'rgb'
    });
    expect(Color.parse('hsla(328, 100%, 44%, 0.64)')).to.eql({
        val: [328, 100, 44, 0.64],
        model: 'hsl'
    });
    expect(Color.parse('unknown(1, 2)')).to.eql({
        val: [0, 0, 0, 1],
        model: 'rgb'
    });
});

it('convert', function() {
    let color = new Color('#abc');
    expect(color.toRgb()).to.eql('rgb(170, 187, 204)');
    expect(color.toHsl()).to.eql('hsl(210, 25%, 73%)');
    expect(color.toHex()).to.eql('#abc');

    color = new Color({
        val: [210, 25, 73, 0.5],
        model: 'hsl'
    });
    expect(color.toRgb()).to.eql('rgba(169, 186, 203, 0.5)');
    expect(color.toHex()).to.eql('#a9bacb');
    expect(color.toHsl()).to.eql('hsla(210, 25%, 73%, 0.5)');
});
