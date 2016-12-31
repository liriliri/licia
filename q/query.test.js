it('parse query', function ()
{
    expect(query.parse('foo=bar')).to.eql({foo: 'bar'});
    expect(query.parse('eruda=true&eustia=false')).to.eql({
        eruda: 'true',
        eustia: 'false'
    });
    expect(query.parse('test=1&test=2')).to.eql({
        test: ['1', '2']
    });
});

it('stringify query', function ()
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
});