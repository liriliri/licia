it('linear', function() {
    expect(easing.linear(0.5)).to.equal(0.5);
});

it('quad', function() {
    expect(easing.inQuad(0.5)).to.equal(0.25);
    expect(easing.outQuad(0.5)).to.equal(0.75);
    expect(easing.inOutQuad(0.3)).to.equal(0.18);
    expect(easing.outInQuad(0.3)).to.equal(0.42);
});

it('cubic', function() {
    expect(easing.inCubic(0.5)).to.equal(0.125);
    expect(easing.outCubic(0.5)).to.equal(0.875);
});

it('quart', function() {
    expect(easing.inQuart(0.5)).to.equal(0.0625);
    expect(easing.outQuart(0.5)).to.equal(0.9375);
});

it('quint', function() {
    expect(easing.inQuint(0.5)).to.equal(0.03125);
    expect(easing.outQuint(0.5)).to.equal(0.96875);
});

it('expo', function() {
    expect(easing.inExpo(0.5)).to.equal(0.015625);
    expect(easing.outExpo(0.5)).to.equal(0.984375);
});

it('sine', function() {
    expect(easing.inSine(0.5)).to.equal(0.29289321881345254);
    expect(easing.outSine(0.5)).to.equal(0.7071067811865475);
});

it('circ', function() {
    expect(easing.inCirc(0.5)).to.equal(0.1339745962155614);
    expect(easing.outCirc(0.5)).to.equal(0.8660254037844386);
});

it('elastic', function() {
    expect(easing.inElastic(0.5)).to.equal(0.015625);
    expect(easing.inElastic(0.5, 500)).to.equal(0.03125);
    expect(easing.inElastic(0)).to.equal(0);
    expect(easing.outElastic(0.5)).to.equal(0.984375);
});

it('back', function() {
    expect(easing.inBack(0.5)).to.equal(-0.125);
    expect(easing.outBack(0.5)).to.equal(1.125);
    expect(easing.inOutBack(0.8)).to.equal(1.064);
    expect(easing.outInBack(0.8)).to.equal(0.464);
});

it('bounce', function() {
    expect(easing.inBounce(0.5)).to.equal(0.234375);
    expect(easing.outBounce(0.5)).to.equal(0.765625);
});
