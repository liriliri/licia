it('true', function() {
    expect(isEl(document.body)).to.be.true;
    expect(isEl(document.createElement('div'))).to.be.true;
});

it('false', function() {
    expect(isEl(document.createTextNode('test'))).to.be.false;
    expect(isEl(document.createComment('test'))).to.be.false;
});
