const mediaQuery = new MediaQuery('screen and (max-width:1000px)');
expect(mediaQuery.isMatch()).to.be.a('boolean');
mediaQuery.setQuery('screen and (max-width:500px)');
expect(mediaQuery.isMatch()).to.be.a('boolean');
