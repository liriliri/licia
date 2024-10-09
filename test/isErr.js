const isBrowser = util.isBrowser;

it('true', function() {
    expect(isErr(new Error())).to.be.true;
    if (isBrowser) {
        expect(isErr(new DOMException('test'))).to.be.true;
    }
});

it('false', function() {
    expect(isErr(5)).to.be.false;
});
