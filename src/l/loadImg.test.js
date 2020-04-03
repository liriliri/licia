it('basic', done => {
    const blob = util.convertBin(
        '/9j/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/yQALCAABAAEBAREA/8wABgAQEAX/2gAIAQEAAD8A0s8g/9k=',
        'Blob'
    );
    const url = util.createUrl(blob);
    loadImg(url, (err, img) => {
        expect(img.width).to.equal(1);
        expect(img.height).to.equal(1);
        done();
    });
});
