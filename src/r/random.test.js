const a = random(1, 5);
expect(a)
    .to.below(6)
    .to.above(0);
expect(a).to.be.a('number');

const b = random(1.2, 5.2, true);
expect(b)
    .to.below(5.3)
    .to.above(1.1);
expect(b).to.be.a('number');

const c = random(5);
expect(c)
    .to.below(6)
    .to.above(-1);
expect(c).to.be.a('number');
