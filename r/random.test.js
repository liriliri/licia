it('return a random number between min and max', function ()
{
    var a = random(1, 5);

    expect(a).to.below(6).to.above(0);

    var b = random(1.2, 5.2, true);
    expect(a).to.below(5.3).to.above(1.1);
    expect(b).to.be.a('number');
});