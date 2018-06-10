it('basic', function() {
    define('A', function() {});
    define('B', 'A', function() {});
    expect(define._modules['A']).to.be.an('object');
    expect(define._modules['B']).to.be.an('object');
});
