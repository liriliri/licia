let $dom;
let sensor;

before(function() {
    $('body').append(
        '<div id="ResizeSensor" style="width: 200px; height: 100px;"></div>'
    );
    $dom = $('#ResizeSensor');
    sensor = new ResizeSensor($dom[0]);
    sensor = new ResizeSensor($dom[0]);
});

after(function() {
    sensor.destroy();
    sensor.destroy();
    $dom.remove();
});

it('detect resize', function(done) {
    let i = 0;
    sensor.addListener(function() {
        i++;
    });
    $dom.css('width', 100);
    setTimeout(() => {
        expect(i).to.be.above(0);
        done();
    }, 100);
});

it('no resize', function(done) {
    let i = 0;
    sensor.addListener(function() {
        i++;
    });
    $dom.css('width', 100);
    setTimeout(() => {
        expect(i).to.equal(0);
        done();
    }, 100);
});
