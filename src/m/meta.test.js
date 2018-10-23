before(function() {
    $('head').append(
        [
            '<meta name="a" content="1" licia="true">',
            '<meta name="b" content="2" licia="true">',
            '<meta name="c" content="3" licia="true">'
        ].join('')
    );
});

after(function() {
    $('meta[licia="true"]').remove();
});

it('get', function() {
    var metaList = meta();
    expect(metaList.a).to.equal('1');
    expect(metaList.b).to.equal('2');
    expect(metaList.c).to.equal('3');

    expect(meta('a')).to.equal('1');
    expect(meta('aa')).to.be.an('undefined');
    expect(meta(['a', 'c'])).to.eql({
        a: '1',
        c: '3'
    });
});

it('set', function() {
    meta('d', '4');
    expect($('meta[name="d"]').attr('content')).to.equal('4');
    meta({
        d: '5',
        e: '6',
        f: '7'
    });
    expect($('meta[name="d"]').attr('content')).to.equal('5');
    expect($('meta[name="e"]').attr('content')).to.equal('6');
    expect($('meta[name="f"]').attr('content')).to.equal('7');
});

it('remove', function() {
    meta.remove('d');
    meta.remove(['e', 'f', 'g']);
    expect($('meta[name="d"]').length).to.equal(0);
    expect($('meta[name="e"]').length).to.equal(0);
    expect($('meta[name="f"]').length).to.equal(0);
});
