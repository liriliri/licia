it('convert hsl to rgb', function ()
{
    expect(hslToRgb([165, 59, 50, 0.8])).to.eql([52, 203, 165, 0.8]);
});