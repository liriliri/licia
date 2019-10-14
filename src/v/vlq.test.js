it('basic', () => {
    expect(vlq.encode(123)).to.equal('2H');
    expect(vlq.encode([123, 456, 789])).to.equal('2HwcqxB');
    expect(vlq.decode('2H')).to.eql([123]);
    expect(vlq.decode('2HwcqxB')).to.eql([123, 456, 789]);
});
