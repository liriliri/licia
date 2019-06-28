it('basic', () => {
    expect(isIp('192.168.191.1')).to.be.true;
    expect(isIp('1:2:3:4:5:6:7:8')).to.be.true;
    expect(isIp('test')).to.be.false;
    expect(isIp.v4('192.168.191.1')).to.be.true;
    expect(isIp.v4('test')).to.be.false;
    expect(isIp.v6('1:2:3:4:5:6:7:8')).to.be.true;
    expect(isIp.v6('test')).to.be.false;

    expect(isIp('192.168.191.1.1')).to.be.false;
    expect(isIp('0.0.0.0')).to.be.true;
    expect(isIp('127.0.0.1')).to.be.true;
    expect(isIp('300.0.0.1')).to.be.false;
});
