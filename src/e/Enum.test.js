let letter = new Enum(['a', 'b', 'c']);

expect(letter.a).to.be.a('number');
letter.a = 'test';
expect(letter.a).to.be.a('number');

letter = new Enum({
    a: 10,
    b: 20,
    c: 30
});

expect(letter.a).to.equal(10);
expect(letter.b).to.equal(20);
expect(letter.c).to.equal(30);
