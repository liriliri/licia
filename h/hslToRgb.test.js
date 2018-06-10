it('basic', function() {
    expect(hslToRgb([165, 59, 50])).to.eql([52, 203, 165]);
    expect(hslToRgb([180, 0, 50])).to.eql([128, 128, 128]);
    expect(hslToRgb([235, 17, 30])).to.eql([63, 66, 90]);
    expect(hslToRgb([0, 15, 20])).to.eql([59, 43, 43]);
    expect(hslToRgb([333, 50, 1])).to.eql([4, 1, 2]);
});

it('alpha', function() {
    expect(hslToRgb([165, 59, 50, 0.8])).to.eql([52, 203, 165, 0.8]);
});
