it('true', function() {
    expect(startWith('ab', 'a')).to.be.true;
    expect(startWith('ab', 'b')).to.be.false;
});

it('false', function() {
    expect(startWith('ab', 'b')).to.be.false;
});
