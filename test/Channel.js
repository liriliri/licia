const a = new Channel();
const b = new Channel();

a.connect(b);
b.on('message', msg => {
    expect(msg).to.equal('hello');
});
a.send('hello');
a.on('message', msg => {
    expect(msg).to.equal('world');
});
b.send('world');

expect(a.isConnected(b)).to.be.true;
expect(b.isConnected(a)).to.be.true;

a.disconnect(b);

expect(a.isConnected(b)).to.be.false;
expect(b.isConnected(a)).to.be.false;

b.connect(a);
expect(a.isConnected(b)).to.be.true;
expect(b.isConnected(a)).to.be.true;

a.destroy();
expect(b.isConnected(a)).to.be.false;
