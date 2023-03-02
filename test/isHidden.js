let $dom;

before(function() {
    $('body').append('<div id="isHidden"></div>');
    $dom = $('#isHidden');
});

after(function() {
    $dom.remove();
});

function getOptions(options) {
    return util.extend(
        {
            display: false,
            visibility: false,
            opacity: false,
            size: false,
            viewport: false
        },
        options
    );
}

it('display', function() {
    const options = getOptions({
        display: true
    });

    $dom.append('<div class="display" style="display:none;">test</div>');
    const $display = $dom.find('.display');
    expect(isHidden($display.get(0), options)).to.be.true;
    $display.append('<div class="inner"></div>');
    const $inner = $display.find('.inner');
    expect(isHidden($inner.get(0), options)).to.be.true;

    // position: fixed
    $inner.css('position', 'fixed');
    expect(isHidden($inner.get(0), options)).to.be.true;
    $display.css('display', 'block');
    expect(isHidden($inner.get(0), options)).to.be.false;
    $inner.css('display', 'none');
    expect(isHidden($inner.get(0), options)).to.be.true;
});

it('visibility', function() {
    const options = getOptions({
        visibility: true
    });

    $dom.append(
        '<div class="visibility" style="visibility:hidden;">test</div>'
    );
    const $visibility = $dom.find('.visibility');
    expect(isHidden($visibility.get(0), options)).to.be.true;
    $visibility.append('<div class="inner"></div>');
    expect(isHidden($visibility.find('.inner').get(0), options)).to.be.true;
});

it('opacity', function() {
    const options = getOptions({
        opacity: true
    });

    $dom.append('<div class="opacity" style="opacity:0;">test</div>');
    const $opacity = $dom.find('.opacity');
    expect(isHidden($opacity.get(0), options)).to.be.true;
    $opacity.append('<div class="inner"></div>');
    expect(isHidden($opacity.find('.inner').get(0), options)).to.be.true;
});

it('size', function() {
    const options = getOptions({
        size: true
    });

    $dom.append('<div class="size" style="width:0;height:0;">test</div>');
    const $size = $dom.find('.size');
    expect(isHidden($size.get(0), options)).to.be.true;
    $size.append('<div class="inner">test</div>');
    expect(isHidden($size.find('.inner').get(0), options)).to.be.true;
});

it('viewport', function() {
    const options = getOptions({
        viewport: true
    });

    $dom.append(
        '<div class="viewport" style="position:fixed;left:-10000px">test</div>'
    );
    const $viewport = $dom.find('.viewport');
    expect(isHidden($viewport.get(0), options)).to.be.true;
});

it('overflow', function() {
    const options = getOptions({
        overflow: true
    });
    $dom.append(
        '<div class="overflow" style="height:200px;width:200px;overflow:hidden;"></div>'
    );
    const $overflow = $dom.find('.overflow');
    $overflow.append(
        '<div class="inner" style="height:10px;width:10px;margin-left:250px;"></div>'
    );
    expect(isHidden($overflow.find('.inner').get(0), options)).to.be.true;
});
