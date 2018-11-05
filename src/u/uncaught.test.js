it('basic', () => {
    expect(uncaught.start).to.be.a('function');
    expect(uncaught.stop).to.be.a('function');
    expect(uncaught.addListener).to.be.a('function');
    expect(uncaught.rmListener).to.be.a('function');
    expect(uncaught.rmAllListeners).to.be.a('function');
});
