const t = util.isDarkMode() ? 'dark' : 'light';
expect(theme.get()).to.equal(t);
