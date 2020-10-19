const state = new State('empty', {
    load: { from: 'empty', to: 'pause' },
    play: { from: 'pause', to: 'play' },
    pause: { from: ['play', 'empty'], to: 'pause' },
    unload: { from: ['play', 'pause'], to: 'empty' }
});

expect(state.is('empty')).to.be.true;
state.load();
expect(state.is('pause')).to.be.true;
state.on('play', function(src) {
    expect(src).to.equal('eustia');
});
state.on('error', function(err, event) {
    expect(err.message).to.equal('play => pause error');
    expect(event).to.equal('load');
});
state.play('eustia');
state.load();
