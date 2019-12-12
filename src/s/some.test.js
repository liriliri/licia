function even(val) {
    return val % 2 === 0;
}

expect(some([2, 4], even)).to.be.true;
expect(some([1, 2, 4], even)).to.be.true;
expect(some([1, 3, 5], even)).to.be.false;
expect(some({ a: 1 }, even)).to.be.false;
