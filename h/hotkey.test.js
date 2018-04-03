it('basic', function () 
{
    var num = 0, a = 65;
    function addOne() { num++; }

    hotkey.on('shift+a', addOne);    
    triggerKeydown(a, {shiftKey: true});
    expect(num).to.equal(1);
    hotkey.off('shift+a', addOne);
    triggerKeydown(a, {shiftKey: true});
    expect(num).to.equal(1);
});

it('multiple', function () 
{
    var num = 0, a = 65, b = 66;
    function addOne() { num++; }

    hotkey.on('ctrl+a, b', addOne);
    triggerKeydown(a, {ctrlKey: true});
    expect(num).to.equal(1);
    triggerKeydown(b);
    expect(num).to.equal(2);
    hotkey.off('ctrl+a', addOne);
    triggerKeydown(a, {ctrlKey: true});
    expect(num).to.equal(2);
    triggerKeydown(b);
    expect(num).to.equal(3);
    hotkey.off('b', addOne);
    triggerKeydown(b);
    expect(num).to.equal(3);
})

function triggerKeydown(keyCode, opt) 
{
    opt = opt || {};

    var eventObj = document.createEvent('Events');

    eventObj.initEvent('keydown', true, true);

    if (keyCode) 
    {
        eventObj.keyCode = keyCode;
        eventObj.which = keyCode;
    }

    for (var a in opt) eventObj[a] = opt[a];

    document.dispatchEvent(eventObj);
}