it('basic', done => {
    const url = util.createUrl('callback({a: 1});');
    jsonp({
        url,
        name: 'callback',
        success(data) {
            expect(data.a).to.equal(1);
            done();
        }
    });
});
