it('linear', function ()
{
    expect(easing.linear(0.5)).to.equal(0.5);
});

it('quad', function ()
{
    expect(easing.easeInQuad(0.5)).to.equal(0.25);
    expect(easing.easeOutQuad(0.5)).to.equal(0.75);
    expect(easing.easeInOutQuad(0.8)).to.equal(0.92);
    expect(easing.easeOutInQuad(0.8)).to.equal(0.68);
});

it('cubic', function ()
{
    expect(easing.easeInCubic(0.5)).to.equal(0.125);
    expect(easing.easeOutCubic(0.5)).to.equal(0.875);
});

it('quart', function ()
{
    expect(easing.easeInQuart(0.5)).to.equal(0.0625);
    expect(easing.easeOutQuart(0.5)).to.equal(0.9375);
});

it('quint', function ()
{
    expect(easing.easeInQuint(0.5)).to.equal(0.03125);
    expect(easing.easeOutQuint(0.5)).to.equal(0.96875);
});

it('expo', function ()
{
    expect(easing.easeInExpo(0.5)).to.equal(0.015625);
    expect(easing.easeOutExpo(0.5)).to.equal(0.984375);
});

it('sine', function ()
{
    expect(easing.easeInSine(0.5)).to.equal(0.29289321881345254);
    expect(easing.easeOutSine(0.5)).to.equal(0.7071067811865475);
});

it('circ', function ()
{
    expect(easing.easeInCirc(0.5)).to.equal(0.1339745962155614);
    expect(easing.easeOutCirc(0.5)).to.equal(0.8660254037844386);
});

it('elastic', function ()
{
    expect(easing.easeInElastic(0.5)).to.equal(0.015625);
    expect(easing.easeInElastic(0.5, 500)).to.equal(0.03125);
    expect(easing.easeOutElastic(0.5)).to.equal(0.984375);
});

it('back', function ()
{
    expect(easing.easeInBack(0.5)).to.equal(-0.125);
    expect(easing.easeOutBack(0.5)).to.equal(1.125);
    expect(easing.easeInOutBack(0.8)).to.equal(1.064);
    expect(easing.easeOutInBack(0.8)).to.equal(0.464);
});

it('bounce', function ()
{
    expect(easing.easeInBounce(0.5)).to.equal(0.234375);
    expect(easing.easeOutBounce(0.5)).to.equal(0.765625);
});
