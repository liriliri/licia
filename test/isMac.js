if (typeof process !== 'undefined' && process.platform === 'darwin') {
    expect(isMac).to.be.true;
} else {
    expect(isMac).to.be.a('boolean');
}
