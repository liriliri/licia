it('basic', function() {
    var welcome = compose(
        function(name) {
            return 'hi: ' + name;
        },
        function(name) {
            return name.toUpperCase() + '!';
        }
    );

    expect(welcome('licia')).to.equal('hi: LICIA!');
});
