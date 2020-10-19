const host = {
    target: {
        a() {
            return 'a';
        },
        b: 'b',
        c: 'c',
        d: 'd'
    }
};
const delegator = new Delegator(host, 'target');

it('method', () => {
    delegator.method('a');
    expect(host.a()).to.equal('a');
});

it('getter', () => {
    delegator.getter('b');
    expect(host.b).to.equal('b');
    host.b = 5;
    expect(host.b).to.equal('b');
});

it('setter', () => {
    delegator.setter('c');
    expect(host.c).to.be.undefined;
    host.c = 5;
    expect(host.c).to.be.undefined;
    expect(host.target.c).to.equal(5);
});

it('access', () => {
    delegator.access('d');
    expect(host.d).to.equal('d');
    host.d = 5;
    expect(host.d).to.equal(5);
});
