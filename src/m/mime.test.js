it('basic', () => {
    expect(mime('jpg')).to.equal('image/jpeg');
    expect(mime('bmp')).to.equal('image/bmp');
    expect(mime('video/mp4')).to.equal('mp4');
});
