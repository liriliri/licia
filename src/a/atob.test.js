it('basic', function() {
    expect(atob('SGVsbG8gV29ybGQ=')).to.equal('Hello World');
});
