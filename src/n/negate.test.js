function even(n) {
    return n % 2 === 0;
}
const odd = negate(even);

expect(odd(5)).to.be.true;
