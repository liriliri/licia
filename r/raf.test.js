it('shortcut for requestAnimationFrame', function ()
{
    expect(raf).to.equal(window.requestAnimationFrame);
    expect(raf.cancel).to.equal(window.cancelAnimationFrame);
});