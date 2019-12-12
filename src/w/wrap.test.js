function five() {
    return 'five';
}
const sayFive = wrap(five, function(fn) {
    return 'Say ' + fn();
});
expect(sayFive()).to.be.equal('Say five');
