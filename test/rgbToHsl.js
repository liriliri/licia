it('basic', function() {
    expect(rgbToHsl([52, 203, 165])).to.eql([165, 59, 50]);
    expect(rgbToHsl([55, 55, 55])).to.eql([0, 0, 22]);
    expect(rgbToHsl([88, 50, 50])).to.eql([0, 28, 27]);
    expect(rgbToHsl([15, 20, 150])).to.eql([238, 82, 32]);
    expect(rgbToHsl([230, 0, 100])).to.eql([334, 100, 45]);
    expect(rgbToHsl([200, 199, 202])).to.eql([260, 3, 79]);
});

it('alpha', function() {
    expect(rgbToHsl([200, 199, 202, 0.5])).to.eql([260, 3, 79, 0.5]);
});
