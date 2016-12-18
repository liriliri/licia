it('convert rgb to hsl', function ()
{
    expect(rgbToHsl([52, 203, 165, 0.8])).to.eql([165, 59, 50, 0.8]);
});