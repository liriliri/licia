var testCase = 'http://surunzi@github.com:8080/foo/bar?test=1&eruda=true#hash';

var parseUrl = Url.parse(testCase);

it('parse', function ()
{
    expect(parseUrl.protocol).to.equal('http:');
    expect(parseUrl.slashes).to.be.true;
    expect(parseUrl.auth).to.equal('surunzi');
    expect(parseUrl.hostname).to.equal('github.com');
    expect(parseUrl.port).to.equal('8080');
    expect(parseUrl.hash).to.equal('#hash');
    expect(parseUrl.pathname).to.equal('/foo/bar');
    expect(parseUrl.query).to.eql({
        test: '1',
        eruda: 'true'
    });
});

it('stringify', function ()
{
    expect(Url.stringify(parseUrl)).to.equal(testCase);
});

it('manipulate query', function ()
{
    var url = new Url('http://liriliri.github.io?eruda=true&foo=bar');
    expect(url.query.eruda).to.equal('true');
    url.setQuery('foo', 'bar');
    expect(url.query.foo).to.equal('bar');
    url.setQuery({
        eruda: 'false',
        foo: 'bar2'
    });
    expect(url.query).to.eql({
        eruda: 'false',
        foo: 'bar2'
    });
    url.rmQuery('eruda');
    expect(url.toString()).to.equal('http://liriliri.github.io/?foo=bar2');
});