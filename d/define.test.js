it('define a module', function ()
{
    define('A', function () {});
    expect(define._modules['A']).to.be.an('object');
});