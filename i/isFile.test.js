it('basic', function() {
    expect(isFile(new File(['test'], 'test.txt', { type: 'text/plain' }))).to.be
        .true;
});
