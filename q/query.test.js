it('parse', function ()
{
    expect(query.parse('foo=bar')).to.eql({foo: 'bar'});
    expect(query.parse('eruda=true&eustia=false')).to.eql({
        eruda: 'true',
        eustia: 'false'
    });
    expect(query.parse('test=1&test=2')).to.eql({
        test: ['1', '2']
    });
    expect(query.parse('te%20st=te%20st')).to.eql({
        'te st': 'te st'
    })
});

it('stringify', function ()
{
    expect(query.stringify({foo: 'bar'})).to.equal('foo=bar');
    expect(query.stringify({
        eruda: 'true',
        eustia: 'false',
        number: 156
    })).to.equal('eruda=true&eustia=false&number=156');
    expect(query.stringify({
        test: ['1', '2']
    })).to.equal('test=1&test=2');
    expect(query.stringify({
        'te st': 'te st'
    })).to.equal('te%20st=te%20st')
});
