const pool = new Wrr();
pool.set('A', 16);
pool.set('B', 8);
pool.set('C', 2);
pool.set('A', 4);
expect(pool.size).to.equal(3);
expect(pool.get('C')).to.equal(2);

const counts = {
    A: 0,
    B: 0,
    C: 0
};
for (let i = 0; i < 1000; i++) {
    counts[pool.next()]++;
}
expect(counts.A).to.be.above(counts.C);
expect(counts.B).to.be.above(counts.A);
pool.remove('A');
expect(pool.size).to.equal(2);
pool.clear();
expect(pool.next()).to.be.an('undefined');
