var sinon = require('sinon');
    
var fakeXMLHttpRequest = sinon.useFakeXMLHttpRequest(),
    requests = [];

fakeXMLHttpRequest.onCreate = function (xhr) { requests.push(xhr) };    
fetch.setting.xhr = function () { return new fakeXMLHttpRequest() };

it('basic', function (done) 
{
    fetch('test.json', {
        method: 'POST',
        headers: {
            a: 1
        },
        body: 'test'
    }).then(function (res) 
    {
        expect(res.text()).to.be.an.instanceof(util.Promise);
        expect(res.xml()).to.be.an.instanceof(util.Promise);
        expect(res.clone()).to.not.equal(res);
        expect(res.headers.keys()).to.eql(['b']);
        expect(res.headers.entries()).to.eql([['b', '2']]);
        expect(res.headers.get('b')).to.equal('2');
        expect(res.headers.has('b')).to.be.true;
        return res.json();
    }).then(function (data) 
    {
        expect(data).to.eql({a: 1});
        done();
    });

    var request = requests[0];

    expect(request.requestHeaders).to.eql({a: 1});
    expect(request.requestBody).to.equal('test');
    request.respond(200, {b: 2}, '{"a":1}');

    requests = [];
});

it('timeout', function (done) 
{
    fetch('test.json', {
        timeout: 50
    }).catch(function (err) 
    {
        expect(err).to.be.an('error');      
        done();  
    });

    var request = requests[0];

    setTimeout(function () 
    {
        request.respond(200, {}, '');
    }, 100);

    requests = [];
});