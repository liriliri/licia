expect(fullscreen.request).to.be.a('function');
expect(fullscreen.exit).to.be.a('function');
expect(fullscreen.toggle).to.be.a('function');
expect(fullscreen.isEnabled()).to.be.true;
expect(fullscreen.isActive()).to.be.false;
