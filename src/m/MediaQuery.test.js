it('basic', () => {
    const mediaQuery = new MediaQuery('screen and (max-width:1000px)');
    expect(mediaQuery.isMatch()).to.be.a('boolean');
});
