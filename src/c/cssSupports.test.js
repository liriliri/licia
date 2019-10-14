it('name', function() {
    expect(cssSupports('grid')).to.be.true;
    expect(cssSupports('invalid')).to.be.false;
});

it('value', function() {
    expect(cssSupports('display', 'flex')).to.be.true;
    expect(cssSupports('display', 'invalid')).to.be.false;
    expect(cssSupports('text-decoration-line', 'underline')).to.be.true;
    expect(cssSupports('text-decoration-style', 'underline')).to.be.false;
    expect(cssSupports('opacity', '0.1')).to.be.true;
    expect(cssSupports('opacity', '10px')).to.be.false;
});
