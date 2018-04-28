$('body').append('<div id="select"><div class="test"></div></div>');

it('select elements', function ()
{
    var $select = new Select('#select'),
        $test = $select.find('.test');

    expect($test.length).to.equal(1);
    $test.each(function ()
    {
        this.innerHTML = 'licia';
    });
    expect($('#select .test').html()).to.equal('licia');
});