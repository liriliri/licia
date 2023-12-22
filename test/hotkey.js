const trigger = util.trigger;
let $dom;

before(function() {
    jQuery('body').append('<div id="hotkey"><div class="inner"></div></div>');
    $dom = jQuery('#hotkey');
});

after(function() {
    $dom.remove();
});

it('basic', function() {
    let num = 0;
    const a = 65;
    function addOne() {
        num++;
    }

    hotkey.on('shift+a', addOne);
    trigger('keydown', { shiftKey: true, keyCode: a });
    expect(num).to.equal(1);
    hotkey.off('shift+a', addOne);
    trigger('keydown', { shiftKey: true, keyCode: a });
    expect(num).to.equal(1);
});

it('multiple', function() {
    let num = 0;
    const a = 65;
    const b = 66;
    function addOne() {
        num++;
    }

    hotkey.on('ctrl+a, b', addOne);
    trigger('keydown', { ctrlKey: true, keyCode: a });
    expect(num).to.equal(1);
    trigger('keydown', { keyCode: b });
    expect(num).to.equal(2);
    hotkey.off('ctrl+a', addOne);
    trigger('keydown', { ctrlKey: true, keyCode: a });
    expect(num).to.equal(2);
    trigger('keydown', { keyCode: b });
    expect(num).to.equal(3);
    hotkey.off('b', addOne);
    trigger('keydown', { keyCode: b });
    expect(num).to.equal(3);
});

it('element', () => {
    let num = 0;
    const a = 65;
    const element = $dom[0];
    function addOne() {
        num++;
    }

    hotkey.on(
        'shift+a',
        {
            element
        },
        addOne
    );
    trigger(element, 'keydown', {
        shiftKey: true,
        keyCode: a
    });
    expect(num).to.equal(1);
    hotkey.off(
        'shift+a',
        {
            element
        },
        addOne
    );
    trigger(element, 'keydown', {
        shiftKey: true,
        keyCode: a
    });
    expect(num).to.equal(1);
});
