const isBlob = util.isBlob;

it('basic', function() {
    const blob = new Blob([]);

    expect(isBlob(blob)).to.be.true;
    expect(blob.slice).to.be.a('function');
});
