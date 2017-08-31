it('basic', function () 
{
    orientation.on('change', onChange);
    orientation.on('change', onChange);

    function onChange() {}

    expect(orientation.get()).to.be.a('string');

    var screen = window.screen;
    if (screen.orientation) 
    {
        var o = screen.orientation;
        screen.orientation = null;
        expect(orientation.get()).to.be.a('string');
        screen.orientation = o;
    }
});