const a = now();
const b = Date.now();

expect(a).to.above(b - 100);
expect(a).to.below(b + 100);
